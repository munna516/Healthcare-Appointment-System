import { ChevronLeft } from "lucide-react";
import { Button } from "@components/ui/button";
import Newsletter from "@components/Newsletter/Newsletter";
import Image from "next/image";
import Link from "next/link";
import CommentSection from "./CommentSection";

const SingleBlogPage = ({ params }) => {
  const blog = {
    id: 3,
    title: "Breakthroughs in Cancer Treatment in 2025",
    thumbnail: "https://i.ibb.co.com/YT80hsZf/pexels-photo-7723620.png",
    description:
      "New advancements in cancer research and treatment that are changing survival rates and patient care.",
    author: "Dr. Alex Johnson",
    category: "Doctor",
    date: "2025-03-22",
    comments: 2,
    likes: 25,
    reacts: 10,
  };

  if (!blog) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        Blog post not found
      </div>
    );
  }

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 pt-28">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Blog Header */}
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            {blog.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {blog.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>By {blog.author}</span>
            <span>•</span>
            <span>
              {new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8 rounded-xl overflow-hidden">
          <div className="relative w-full h-96">
            {" "}
            {/* Container with fixed height */}
            <Image
              src={blog.thumbnail}
              alt={blog.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            />
          </div>
        </div>

        {/* Blog Content */}
        <div className="prose max-w-none mb-12">
          <p className="text-lg text-gray-700 mb-6">{blog.description}</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Introduction
          </h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
            auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Key Findings
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Lorem ipsum dolor sit amet</li>
            <li className="mb-2">Consectetur adipiscing elit</li>
            <li className="mb-2">Nullam in dui mauris</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Conclusion
          </h2>
          <p className="text-gray-700">
            Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque
            eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
            Phasellus molestie magna non est bibendum non venenatis nisl tempor.
          </p>
        </div>

        {/* Engagement Metrics */}
        <div className="flex items-center gap-6 mb-12 border-t border-b border-gray-200 py-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">👍</span>
            <span className="text-gray-700">{blog.likes}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">💬</span>
            <span className="text-gray-700">{blog.comments}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">❤️</span>
            <span className="text-gray-700">{blog.reacts}</span>
          </div>
        </div>

        {/* Newsletter CTA */}
        <CommentSection />
      </div>
      <div className="my-10">
        <Newsletter
          title="Want more content like this?"
        />
      </div>
    </>
  );
};

export default SingleBlogPage;
