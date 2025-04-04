"use client"

import toast from "react-hot-toast";

export default function BlogWriting() {

  const handleBlogSubmit = async(e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const content = form.content.value;
    const imageFile = form.image.files[0];

    try {
      const formData = new FormData();
      formData.append("image", imageFile);
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGEBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const imgData = await response.json();

      if (!imgData.success) {
        toast.error("Image upload failed");
        return;
      }
  
      const imageUrl = imgData.data.url; 
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          imageUrl,
        }),
      });
  
      if (!res.ok) {
        throw new Error("Failed to submit form");
      }
  
      const result = await res.json();
      toast.success("successfully submitted");
    } catch (error) {
      toast.error("error occurred!");
    };
  };

  return (
    <div className="p-6 bg-gray-100 max-w-7xl mx-auto w-full min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Write a New Blog</h1>

      {/* Blog Title Input */}
    <form onSubmit={handleBlogSubmit}>
    <input
        type="text"
        placeholder="Enter Blog Title"
        className="w-full p-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
        name="title"
      />

      {/* Blog Content Textarea */}
      <textarea
        placeholder="Write your blog content here..."
        className="w-full p-4 h-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        name="content"
      />
        <input required type="file" id="image" name="image" accept="image/*"
      />

      {/* Action Buttons */}
      <div className="flex justify-center md:justify-end mt-5 gap-4">
        <button
          className="px-6 py-3 bg-[#00a6fb] text-white rounded-lg hover:bg-[#0282c3]"
        >
          Publish Blog
        </button>
      </div>
    </form>
    </div>
  );
}