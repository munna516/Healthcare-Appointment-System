import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative">
        <Image
          src={
            post?.thumbnail ||
            "https://i.ibb.co.com/6Jt9jMjn/Screenshot-2025-03-30-153253.png"
          }
          alt={post?.title}
          width={500}
          height={300}
          className="w-full h-56 object-cover group-hover:transition-transform transform duration-200 hover:scale-105"
        />
        <span
          className={`absolute top-3 left-3 ${
            post?.category === "Health & Wellness"
              ? "bg-green-500"
              : post?.category === "Health Tech"
              ? "bg-blue-500"
              : post?.category === "Health & Fitness"
              ? "bg-pink-500"
              : ""
          } text-white text-xs px-4 py-2 rounded-2xl font-semibold`}
        >
          {post?.category}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <span className="mr-3">📘 {post?.author}</span>
          <span>📅 {post?.date}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{post?.title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{post?.description}</p>
        <div className="flex items-center justify-between mt-4 text-gray-500 text-sm">
          <Link href={`/blog/${post._id}`}>
            <p className="font-semibold text-black hover:text-blue-500 flex items-center gap-3 cursor-pointer">
              Read More
              <span>
                <FaArrowRightLong />
              </span>
            </p>
          </Link>
          <div className="flex space-x-3">
            <span>💬 {post?.comments || 0}</span>
            <span>❤️ {post?.reacts || 0}</span>
            <span>👍 {post?.likes || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  post: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    comments: PropTypes.number.isRequired,
    reacts: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default BlogCard;
