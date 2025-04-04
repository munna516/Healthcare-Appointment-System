"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import BlogCard from "./BlogCard";
import Link from "next/link";
import { Button } from "@components/ui/button";

const PostArticle = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blog");
        const data = await response.json();
        console.log("Fetched blogs:", data);
        setBlogs(data.slice(0, 3));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section className="py-10 bg-gray-50">
      <div className="w-[90%] mx-auto ">
        <h4 className="text-center text-blue-500 font-semibold">
          <span className="border-l-2 border-blue-500 pl-4 font-bold text-xl ">
            Latest News
          </span>
        </h4>
        <h2 className="text-center text-3xl font-bold mt-1">
          Latest Post & Articles
        </h2>
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00a6fb]"></div>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {blogs.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            <div className="flex justify-center items-center w-full mt-10">
              <Link href="/blog">
                <Button variant="primary">Show All</Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default PostArticle;
