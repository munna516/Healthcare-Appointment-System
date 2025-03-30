"use client";
import { useState } from "react";
import { Button } from "@components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Textarea } from "@components/ui/textarea";

const CommentSection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      comment:
        "This article was incredibly helpful! The new treatments give me hope for my mother's condition.",
      date: "2025-03-23",
      image: "https://i.ibb.co.com/MBNt4Gv/istockphoto-495353929-170667a.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      comment:
        "I'd love to see more details about the clinical trial phases mentioned here.",
      date: "2025-03-24",
    },
  ]);

  const [newComment, setNewComment] = useState({
    comment: "",
    date: new Date().toISOString().split("T")[0],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.comment) {
      const commentToAdd = {
        ...newComment,
        date: new Date().toISOString().split("T")[0],
      };
      setComments([commentToAdd, ...comments]);
      setNewComment({
        name: "",
        comment: "",
        date: new Date().toISOString().split("T")[0],
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value });
  };

  return (
    <div className="mt-6 bg-white shadow-lg p-4 rounded-lg">
      {/* Comment Form */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          Leave a Comment
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Textarea
              name="comment"
              placeholder="Write your comment here..."
              value={newComment.comment}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-2  border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <Button type="submit" variant="primary">
            Post Comment
          </Button>
        </form>
      </div>

      {/* Comments List */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          Recent Comments ({comments.length})
        </h3>
        {comments.length > 0 ? (
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="border-b pb-4 last:border-b-0">
                <div className="flex items-center mb-2">
                  <div className="mr-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={comment?.image}
                        className="object-cover"
                      />
                      <AvatarFallback>CU</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {comment.name}
                    </h4>
                    <span className="text-sm text-gray-500">
                      {comment.date}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 pl-11">{comment.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
