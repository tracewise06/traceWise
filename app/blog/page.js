import { getAllPosts } from "@/lib/blog";
import BlogClient from "./BlogClient";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <BlogClient posts={posts} />
    </div>
  );
}