import { getAllPosts } from "@/lib/blog";

export async function GET() {
  const baseUrl = "http://localhost:3000"; // change later

  const posts = getAllPosts();

  const rssItems = posts
    .map(
      (post) => `
        <item>
          <title>${post.title}</title>
          <link>${baseUrl}/blog/${post.slug}</link>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <description>${post.description}</description>
        </item>
      `
    )
    .join("");

  const rss = `
    <rss version="2.0">
      <channel>
        <title>Your Blog Name</title>
        <link>${baseUrl}</link>
        <description>Your blog description</description>
        ${rssItems}
      </channel>
    </rss>
  `;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}