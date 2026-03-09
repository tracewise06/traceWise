"use client";

import { useState } from "react";
import Link from "next/link";

const POSTS_PER_PAGE = 5;

export default function BlogClient({ posts }) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const paginatedPosts = filteredPosts.slice(start, end);

  return (
    <>
      <input
        type="text"
        placeholder="Search posts..."
        className="w-full mb-10 p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      <div className="space-y-8">
        {paginatedPosts.map((post) => (
          <div key={post.slug} className="border-b border-gray-800 pb-6">
            <Link
              href={`/blog/${post.slug}`}
              className="text-2xl font-semibold hover:text-brand-500 transition"
            >
              {post.title}
            </Link>

            <p className="text-gray-400 mt-2">
              {post.description}
            </p>

            <p className="text-sm text-gray-500 mt-1">
              {post.date}
            </p>
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-12">
        {page > 1 && (
          <button
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
          >
            ← Previous
          </button>
        )}

        {page < totalPages && (
          <button
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
          >
            Next →
          </button>
        )}
      </div>
    </>
  );
}