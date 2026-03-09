import fs from "fs";

export async function GET(req){

  const slug =
  new URL(req.url).searchParams.get("slug");

  const draft = JSON.parse(
    fs.readFileSync(`drafts/${slug}.json`)
  );

  const mdx = `
---
title: "${draft.title}"
date: "${draft.date}"
description: "AI generated article"
tags: ["AI"]
---

${draft.content}
`;

  fs.writeFileSync(
    `content/blog/${slug}.mdx`,
    mdx
  );

  return new Response(
    "Post published successfully"
  );

}