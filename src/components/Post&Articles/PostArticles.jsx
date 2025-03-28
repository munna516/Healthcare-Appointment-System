import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const posts = [
  {
    id: 1,
    category: "Medical",
    image: "https://i.ibb.co.com/FbXPRX4Z/blog-1.jpg",
    title: "Telehealth Services Are Ready To Help Your Family",
    date: "22 June 2023",
    author: "Admin",
    description:
      "Explore how telehealth services are transforming healthcare, making medical consultations more accessible and convenient for families.",
  },
  {
    id: 2,
    category: "Hospital",
    image: "https://i.ibb.co.com/tp6MpmwW/blog-2.jpg",
    title: "Doccure – Ensuring a Smooth and Painless Clinic Visit.",
    date: "22 June 2023",
    author: "Admin",
    description:
      "Discover how Doccure simplifies clinic visits, reducing wait times and ensuring a seamless healthcare experience for patients.",
  },
  {
    id: 3,
    category: "Doctor",
    image: "https://i.ibb.co.com/sS7kCD2/blog-3.jpg",
    title: "What Are The Benefits Of Online Doctor Booking",
    date: "22 June 2023",
    author: "Admin",
    description:
      "Learn about the advantages of online doctor booking, from saving time to getting immediate medical consultations anytime, anywhere.",
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
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden group "
            >
              <div className="relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover group-hover:transition-transform transform duration-200 hover:scale-105"
                />
                <span
                  className={`absolute top-3 left-3 ${
                    post.category == "Medical"
                      ? "bg-green-500"
                      : post.category == "Hospital"
                      ? "bg-blue-500"
                      : post.category == "Doctor"
                      ? "bg-pink-500"
                      : ""
                  } text-white text-xs px-4 py-2 rounded-2xl font-semibold `}
                >
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <span className="mr-3">📘 {post.author}</span>
                  <span>📅 {post.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{post.description}</p>
                <div className="flex items-center justify-between mt-4  text-gray-500 text-sm">
                  <p className="font-semibold text-black hover:text-blue-500 flex items-center gap-3 cursor-pointer">
                    Read More{" "}
                    <span>
                      {" "}
                      <FaArrowRightLong />
                    </span>
                  </p>
                  <div className="flex space-x-3">
                    <span>💬 5</span>
                    <span>❤️ 20</span>
                    <span>👍 15</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostArticle;
