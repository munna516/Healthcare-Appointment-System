import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import BlogCard from "./BlogCard";
import Link from "next/link";
import { Button } from "@components/ui/button";

const blogs = [
  {
    id: 1,
    title: "The Impact of AI in Modern Healthcare",
    thumbnail: "https://i.ibb.co.com/5ZSyNnD/5g-for-healthcare.png",
    description:
      "How artificial intelligence is transforming diagnostics, treatment, and patient care in healthcare.",
    author: "Dr. John Carter",
    category: "Medical",
    date: "2025-03-28",
    comments: 18,
    likes: 200,
    reacts: 320,
  },
  {
    id: 2,
    title: "Telemedicine: The Future of Patient Consultations",
    thumbnail: "https://i.ibb.co.com/mC0Xwtyh/pexels-photo-7176026.png",
    description:
      "Exploring the rise of telehealth services and how they are revolutionizing doctor-patient interactions.",
    author: "Dr. Jane Doe",
    category: "Hospital",
    date: "2025-03-25",
    comments: 25,
    likes: 180,
    reacts: 290,
  },
  {
    id: 3,
    title: "Breakthroughs in Cancer Treatment in 2025",
    thumbnail: "https://i.ibb.co.com/YT80hsZf/pexels-photo-7723620.png",
    description:
      "New advancements in cancer research and treatment that are changing survival rates and patient care.",
    author: "Dr. Alex Johnson",
    category: "Doctor",
    date: "2025-03-22",
    comments: 30,
    likes: 250,
    reacts: 400,
  },
];

const PostArticle = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h4 className="text-center text-blue-500 font-semibold">
          <span className="border-l-2 border-blue-500 pl-4 font-bold text-xl ">
            Latest News
          </span>
        </h4>
        <h2 className="text-center text-3xl font-bold mt-1">
          Latest Post & Articles
        </h2>
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
      </div>
    </section>
  );
};

export default PostArticle;
