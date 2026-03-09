import nodemailer from "nodemailer";

export async function sendDraftEmail(title, content, approveLink) {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });

  const html = `
  <h2>${title}</h2>
  <p>${content.substring(0,500)}...</p>

  <h3>Approve & Publish</h3>
  <a href="${approveLink}">
    ${approveLink}
  </a>
  `;

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `AI Blog Draft: ${title}`,
    html
  });

}