import OpenAI from "openai";
import fs from "fs";
import slugify from "slugify";
import { sendDraftEmail } from "@/lib/sendEmail";

export async function POST(req){

  const { title } = await req.json();

  const slug = slugify(title,{ lower:true });

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  const completion = await openai.chat.completions.create({
    model:"gpt-4o-mini",
    messages:[
      {
        role:"system",
        content:"You are a professional tech blogger"
      },
      {
        role:"user",
        content:`Write a detailed blog article about ${title}. Use markdown headings.`
      }
    ]
  });

  const blogContent = completion.choices[0].message.content;

  const draft = {
    title,
    slug,
    date: new Date().toISOString(),
    content: blogContent
  };

  fs.writeFileSync(
    `drafts/${slug}.json`,
    JSON.stringify(draft,null,2)
  );

  const approveLink =
  `${process.env.SITE_URL}/api/approve-post?slug=${slug}`;

  await sendDraftEmail(title, blogContent, approveLink);

  return Response.json({
    message:"Draft generated and email sent"
  });

}