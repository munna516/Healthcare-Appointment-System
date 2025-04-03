import BlogCard from "@components/Post&Articles/BlogCard";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Newsletter from "@components/Newsletter/Newsletter";

export default function Blog() {
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
    {
      id: 4,
      title: "The Role of Nutrition in Preventative Healthcare",
      thumbnail: "https://i.ibb.co.com/GvSNc2vL/pexels-photo-7615566.png",
      description:
        "Understanding the importance of a balanced diet in preventing chronic diseases and promoting overall health.",
      author: "Dr. Emily White",
      category: "Hospital",
      date: "2025-03-18",
      comments: 20,
      likes: 170,
      reacts: 275,
    },
    {
      id: 5,
      title: "How Wearable Devices Are Revolutionizing Health Monitoring",
      thumbnail: "https://i.ibb.co.com/5ZSyNnD/5g-for-healthcare.png",
      description:
        "From smartwatches to biosensors, discover how wearable tech is helping individuals track and manage their health.",
      author: "Dr. Michael Brown",
      category: "Doctor",
      date: "2025-03-15",
      comments: 28,
      likes: 210,
      reacts: 340,
    },
    {
      id: 6,
      title: "Mental Health Awareness: The Importance of Early Intervention",
      thumbnail: "https://i.ibb.co.com/QvpTBkvK/pexels-photo-236151.png",
      description:
        "Why recognizing early signs of mental health issues and seeking help is crucial for long-term well-being.",
      author: "Dr. Sarah Connor",
      category: "Hospital",
      date: "2025-03-10",
      comments: 35,
      likes: 220,
      reacts: 360,
    },
    {
      id: 7,
      title: "The Future of Surgery: Robotics and Automation",
      thumbnail: "https://i.ibb.co.com/RkJYjNwf/pexels-photo-3913031.png",
      description:
        "Exploring how robotic-assisted surgeries are improving precision and patient recovery times.",
      author: "Dr. David Lee",
      category: "Medical",
      date: "2025-03-05",
      comments: 27,
      likes: 190,
      reacts: 310,
    },
    {
      id: 8,
      title: "5G in Healthcare: Enabling Faster and More Efficient Care",
      thumbnail: "https://i.ibb.co.com/5ZSyNnD/5g-for-healthcare.png",
      description:
        "How 5G technology is enhancing telemedicine, remote surgeries, and real-time data sharing in healthcare.",
      author: "Dr. Sophia Martinez",
      category: "Doctor",
      date: "2025-03-02",
      comments: 22,
      likes: 175,
      reacts: 290,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 pt-28 pb-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Healthcare Insights
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the latest trends, research, and innovations in medical
          technology and healthcare practices.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Button variant="outline" className="px-6 py-2 rounded-full">
          All
        </Button>
        <Button variant="primary" className="px-6 py-2 rounded-full">
          Medical
        </Button>
        <Button variant="outline" className="px-6 py-2 rounded-full">
          Hospital
        </Button>
        <Button variant="outline" className="px-6 py-2 rounded-full">
          Doctor
        </Button>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {blogs.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
            className="hover:shadow-lg transition-shadow duration-300"
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4">
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
      </div>

      {/* Newsletter CTA */}
      <Newsletter
        title="Don't Miss Latest Healthcare News!"
        className="mt-16"
      />
    </div>
  );
}
