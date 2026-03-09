import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();

  const allTags = posts.flatMap((post) => post.tags || []);

  const uniqueTags = [...new Set(allTags)];

  return uniqueTags.map((tag) => ({
    tag,
  }));
}

export default async function TagPage({ params }) {
  const { tag } = await params;

  const posts = getAllPosts();

  const filteredPosts = posts.filter((post) =>
    post.tags?.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold mb-10">
        Posts tagged: #{tag}
      </h1>

      <div className="space-y-8">
        {filteredPosts.map((post) => (
          <div key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-xl font-semibold hover:text-brand-500 transition"
            >
              {post.title}
            </Link>

            <p className="text-gray-500 text-sm mt-1">
              {post.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}