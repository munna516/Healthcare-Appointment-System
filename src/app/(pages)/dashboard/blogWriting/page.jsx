"use client";
import { useSession } from "next-auth/react";
import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { Textarea } from "@components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@components/ui/select";
import toast from "react-hot-toast";
import { useState } from "react";

export default function BlogWriting() {
  const { data: session } = useSession();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [blogData, setBlogData] = useState({
    title: "",
    thumbnail: null,
    description: "",
    author: session?.user?.name || "",
    category: "",
    date: new Date().toISOString().split("T")[0],
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBlogData((prev) => ({
        ...prev,
        thumbnail: file,
      }));
    }
  };

  const resetForm = () => {
    setBlogData({
      title: "",
      thumbnail: null,
      description: "",
      author: session?.user?.name || "Anonymous",
      category: "",
      date: new Date().toISOString().split("T")[0],
      content: "",
    });
    const fileInput = document.getElementById("thumbnail");
    if (fileInput) fileInput.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      let thumbnailUrl = null;

      if (blogData.thumbnail) {
        const imgbbFormData = new FormData();
        imgbbFormData.append("image", blogData.thumbnail);

        const imgbbResponse = await fetch(
          `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGEBB_API_KEY}`,
          {
            method: "POST",
            body: imgbbFormData,
          }
        );

        const imgbbData = await imgbbResponse.json();

        if (!imgbbData.success) {
          throw new Error("Image upload failed");
        }

        thumbnailUrl = imgbbData.data.url;
      }

      const formData = new FormData();
      formData.append("title", blogData.title);
      formData.append("description", blogData.description);
      formData.append("author", blogData.author || "Anonymous");
      formData.append("category", blogData.category);
      formData.append("content", blogData.content);
      if (thumbnailUrl) formData.append("thumbnailUrl", thumbnailUrl);

      const response = await fetch("/api/blog", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to publish blog");
      }

      resetForm();
      toast.success("Blog published successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message || "Failed to publish blog");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto w-full min-h-screen">
      {/* Page Title */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
        Create New Blog Post
      </h1>

      {/* Blog Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md p-4 sm:p-6 space-y-4"
      >
        {/* Blog Title Input */}
        <div className="space-y-1">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            type="text"
            placeholder="Your blog title"
            className="text-base sm:text-lg"
            value={blogData.title}
            onChange={handleChange}
            required
            maxLength={60}
          />
        </div>

        {/* Thumbnail and Category Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label htmlFor="thumbnail">Thumbnail Image</Label>
            <Input
              id="thumbnail"
              name="thumbnail"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          {/* Category Input */}
          <div className="space-y-1">
            <Label htmlFor="category">Category</Label>
            <Select
              name="category"
              value={blogData.category}
              onValueChange={(value) =>
                setBlogData({ ...blogData, category: value })
              }
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Health Tech">Health Tech</SelectItem>
                <SelectItem value="Health & Wellness">
                  Health & Wellness
                </SelectItem>
                <SelectItem value="Health & Fitness">
                  Health & Fitness
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Description Input */}
        <div className="space-y-1">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Brief summary of your blog post"
            rows="3"
            value={blogData.description}
            onChange={handleChange}
            required
            maxLength={120}
          />
        </div>

        {/* Blog Content Textarea */}
        <div className="space-y-1">
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            name="content"
            placeholder="Write your blog content here..."
            className="min-h-[250px] sm:min-h-[300px]"
            value={blogData.content}
            onChange={handleChange}
            required
            maxLength={1200}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-3 border-t border-gray-200">
          <Button type="submit" disabled={isSubmitting} className="px-4 py-2">
            {isSubmitting ? "Publishing..." : "Publish Blog"}
          </Button>
        </div>
      </form>
    </div>
  );
}
