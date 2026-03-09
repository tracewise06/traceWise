import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;   // ✅ FIX HERE

  const post = getPostBySlug(slug);

  return {
    title: post.frontMatter.title,
    description: post.frontMatter.description,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;   // ✅ This part you already fixed

  const post = getPostBySlug(slug);

  const relatedPosts = getRelatedPosts(
    slug,
    post.frontMatter.tags
  );

  return (
    <article className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-4">
        {post.frontMatter.title}
      </h1>

      <p className="text-gray-500 mb-10">
        {post.frontMatter.date} • {post.readingTime}
      </p>

      {post.frontMatter.tags && (
        <div className="flex flex-wrap gap-3 mb-10">
          {post.frontMatter.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag}`}
              className="px-3 py-1 text-sm bg-brand-500/10 text-brand-400 rounded-full hover:bg-brand-500/20 transition"
            >
              #{tag}
            </Link>
          ))}
        </div>
      )}

      <div className="prose prose-invert max-w-none">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypePrettyCode,
                  {
                    theme: "github-dark",
                  },
                ],
              ],
            },
          }}
        />
      </div>

      {relatedPosts.length > 0 && (
        <div className="mt-20 border-t border-gray-800 pt-10">
          <h2 className="text-2xl font-bold mb-6">Related Posts</h2>

          <div className="space-y-6">
            {relatedPosts.map((related) => (
              <div key={related.slug}>
                <Link
                  href={`/blog/${related.slug}`}
                  className="text-lg font-semibold hover:text-brand-500 transition"
                >
                  {related.title}
                </Link>

                <p className="text-sm text-gray-500">
                  {related.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}