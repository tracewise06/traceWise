import { getAllPosts } from "@/lib/blog";

export default function sitemap() {
  const baseUrl = "http://localhost:3000"; // CHANGE THIS

  const posts = getAllPosts();

  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    ...blogUrls,
  ];
}