export default function BlogListSection() {
  const posts = [
    {
      title: "Why Generative AI Matters for Businesses",
      date: "Jan 2024",
      desc: "A breakdown of how generative AI can automate workflows and enhance customer experience.",
    },
    {
      title: "Basics of Fog Computing",
      date: "Dec 2023",
      desc: "Understanding fog & edge computing through iFogSim simulations.",
    },
    {
      title: "Getting Started with RAG Applications",
      date: "Nov 2023",
      desc: "How Retrieval-Augmented Generation improves accuracy of AI applications.",
    },
  ];

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <div
          key={post.title}
          className="p-6 border rounded-lg hover:shadow-sm transition"
        >
          <h3 className="text-2xl font-semibold">{post.title}</h3>
          <div className="text-gray-500 text-sm">{post.date}</div>
          <p className="text-gray-600 mt-2">{post.desc}</p>

          <button className="mt-4 px-4 py-2 text-blue-600 font-medium hover:underline">
            Read More →
          </button>
        </div>
      ))}
    </div>
  );
}
