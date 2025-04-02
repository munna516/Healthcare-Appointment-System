"use client"
import { useState } from "react";

export default function BlogWriting() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePublish = () => {
    console.log("Title:", title);
    console.log("Content:", content);
    alert("Blog Published Successfully!");
  };

  return (
    <div className="p-6 bg-gray-100 max-w-7xl mx-auto w-full min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Write a New Blog</h1>

      {/* Blog Title Input */}
      <input
        type="text"
        placeholder="Enter Blog Title"
        className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Blog Content Textarea */}
      <textarea
        placeholder="Write your blog content here..."
        className="w-full p-4 h-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      {/* Action Buttons */}
      <div className="flex justify-center md:justify-end mt-5 gap-4">
        <button
          onClick={handlePublish}
          className="px-6 py-3 bg-[#00a6fb] text-white rounded-lg hover:bg-[#0282c3]"
        >
          Publish Blog
        </button>
      </div>
    </div>
  );
}