"use client";
import BlogCard from "@components/Post&Articles/BlogCard";
import { Button } from "@components/ui/button";
import React, { useState, useEffect } from "react";
import Newsletter from "@components/Newsletter/Newsletter";
// import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blog");
        const data = await response.json();
        console.log("Fetched blogs:", data);
        setBlogs(data);
        setFilteredBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const filterByCategory = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredBlogs(blogs);
      return;
    }

    const normalizedCategory = category.toLowerCase().replace(/[&\s]/g, "");
    const filtered = blogs.filter((blog) => {
      const blogCategories = blog.categories || blog.category || [];

      const categoriesArray = Array.isArray(blogCategories)
        ? blogCategories
        : [blogCategories];

      return categoriesArray.some(
        (cat) =>
          String(cat).toLowerCase().replace(/[&\s]/g, "") === normalizedCategory
      );
    });

    setFilteredBlogs(filtered);
  };

  const categories = [
    "All",
    "Health Tech",
    "Health & Wellness",
    "Health & Fitness",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 pt-28 pb-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Healthcare Insights
        </h1>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the latest trends, research, and innovations in medical
          technology and healthcare practices.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "primary" : "outline"}
            className="px-6 py-2 rounded-full"
            onClick={() => filterByCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Loading state */}
      {loading && (
        <div className="text-center py-12">Loading blog posts...</div>
      )}

      {/* Blog Grid */}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((post) => (
              <BlogCard
                key={post._id || post.id}
                post={post}
                className="hover:shadow-lg transition-shadow duration-300"
              />
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              No blog posts found for this category.
            </div>
          )}
        </div>
      )}
      {/* Pagination */}
      {/* <div className="flex justify-center gap-4">
        <Button variant="outline" className="px-6 py-2">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        <div className="flex gap-2">
          {[1, 2, 3].map((page) => (
            <Button
              key={page}
              variant={page === 1 ? "primary" : "outline"}
              className="w-10 h-10 p-0"
            >
              {page}
            </Button>
          ))}
        </div>
        <Button variant="outline" className="px-6 py-2">
          Next
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div> */}
      <Newsletter
        title="Don't Miss Latest Healthcare News!"
        className="mt-16"
      />
    </div>
  );
}
