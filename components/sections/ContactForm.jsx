"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      e.target.reset();
    } else {
      setStatus("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-3 rounded-md bg-gray-900 border border-gray-700"
      />

      <input
        name="email"
        type="email"
        placeholder="Your Email"
        required
        className="w-full p-3 rounded-md bg-gray-900 border border-gray-700"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        required
        className="w-full p-3 rounded-md bg-gray-900 border border-gray-700"
      />

      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 bg-blue-600 rounded-md hover:bg-blue-700 transition"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status && (
        <p className="text-sm mt-2 text-green-400">
          {status}
        </p>
      )}
    </form>
  );
}