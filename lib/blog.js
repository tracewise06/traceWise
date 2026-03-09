import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "content/blog");

// Get all posts (for blog list page)
export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
    };
  });

  // Sort by newest first
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Get single post by slug
export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

    const stats = readingTime(content);

    return {
    slug,
    frontMatter: data,
    content,
    readingTime: stats.text, // e.g. "4 min read"
    };
}

export function getRelatedPosts(currentSlug, currentTags) {
  const posts = getAllPosts();

  return posts
    .filter((post) => post.slug !== currentSlug)
    .filter((post) =>
      post.tags?.some((tag) => currentTags?.includes(tag))
    )
    .slice(0, 3);
}