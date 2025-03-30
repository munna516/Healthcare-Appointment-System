import { Button } from "@components/ui/button";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { FaRegStar, FaStar } from "react-icons/fa";

const ReviewSection = ({ doctorId }) => {
  console.log("fetch data with this id", doctorId);

  const sampleReviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment:
        "Dr. Smith was incredibly thorough and took the time to explain everything in detail. The office was clean and the staff was friendly. Highly recommend!",
      date: "2023-11-15",
      image: "https://i.ibb.co.com/MBNt4Gv/istockphoto-495353929-170667a.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 4,
      comment:
        "Good experience overall. The doctor was knowledgeable but I had to wait about 20 minutes past my appointment time. Treatment was effective though.",
      date: "2023-10-28",
    },
    {
      id: 3,
      name: "Emily Wilson",
      rating: 5,
      comment:
        "Best healthcare experience I've had! The doctor listened carefully to all my concerns and provided clear advice. The follow-up was excellent too.",
      date: "2023-10-12",
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 3,
      comment:
        "Average visit. The diagnosis seemed correct but the bedside manner was a bit rushed. The prescription worked well for my condition.",
      date: "2023-09-30",
    },
    {
      id: 5,
      name: "Jessica Lee",
      rating: 5,
      comment:
        "Exceptional care! The doctor went above and beyond to make sure I understood my treatment options. The office had a very calming atmosphere.",
      date: "2023-09-18",
      image: "https://i.ibb.co.com/MBNt4Gv/istockphoto-495353929-170667a.jpg",
    },
    {
      id: 6,
      name: "Robert Garcia",
      rating: 4,
      comment:
        "Very professional staff. The doctor answered all my questions patiently. Only giving 4 stars because parking was difficult to find.",
      date: "2023-08-22",
    },
    {
      id: 7,
      name: "Amanda Park",
      rating: 5,
      comment:
        "I was nervous about my first visit but the doctor made me feel completely at ease. The treatment plan was perfect for my needs. Will definitely return!",
      date: "2023-08-10",
      image: "https://i.ibb.co.com/MBNt4Gv/istockphoto-495353929-170667a.jpg",
    },
    {
      id: 8,
      name: "James Wilson",
      rating: 2,
      comment:
        "Disappointing experience. Felt like the doctor wasn't really listening to my symptoms. Had to visit another doctor to get proper treatment.",
      date: "2023-07-25",
    },
    {
      id: 9,
      name: "Olivia Martinez",
      rating: 5,
      comment:
        "Absolutely wonderful! The doctor remembered details from my last visit and the personalized care made all the difference in my recovery.",
      date: "2023-07-12",
    },
    {
      id: 10,
      name: "Daniel Kim",
      rating: 4,
      comment:
        "Great doctor with excellent expertise. The only reason I'm not giving 5 stars is because the office paperwork process took longer than expected.",
      date: "2023-06-30",
    },
  ];
  const [reviews, setReviews] = useState(sampleReviews);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 0,
    comment: "",
    date: new Date().toISOString().split("T")[0],
  });
  const [hoverRating, setHoverRating] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.rating > 0 && newReview.comment) {
      const reviewToAdd = {
        ...newReview,
        id: reviews.length + 1,
        date: new Date().toISOString().split("T")[0],
      };
      setReviews([reviewToAdd, ...reviews]);
      setNewReview({
        name: "",
        rating: 0,
        comment: "",
        date: new Date().toISOString().split("T")[0],
      });
    }
  };

  const topReviews = [...reviews]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <div className="mt-6 bg-white shadow-lg p-4 rounded-lg">
      <div>
        <h3 className="form-title text-xl font-semibold mb-4 text-gray-700">
          Write Your Review
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="rating-group mb-4">
            <div className="stars flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  className="star-button text-2xl focus:outline-none"
                  onClick={() => setNewReview({ ...newReview, rating: star })}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                >
                  {star <= (hoverRating || newReview.rating) ? (
                    <FaStar className="star-filled text-yellow-400" />
                  ) : (
                    <FaRegStar className="star-empty text-yellow-400" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="comment-group mb-4">
            <textarea
              name="comment"
              placeholder="Write your review here..."
              value={newReview.comment}
              onChange={handleInputChange}
              rows="4"
              className="comment-textarea w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <Button type="submit" variant="primary">
            Submit Review
          </Button>
        </form>
      </div>

      <div className="reviews-list mt-6">
        <h3 className="reviews-title text-xl font-semibold mb-4 text-gray-700">
          Top Reviews
        </h3>
        {topReviews.length > 0 ? (
          <div className="reviews-container space-y-6">
            {topReviews.map((review) => (
              <div
                key={review.id}
                className="review-item border-b pb-4 last:border-b-0"
              >
                <div className="review-header flex items-center mb-2">
                  <div className="avatar mr-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={review?.image}
                        className="object-cover"
                      />
                      <AvatarFallback>CU</AvatarFallback>
                    </Avatar>{" "}
                  </div>
                  <div className="review-meta">
                    <h4 className="reviewer-name font-medium text-gray-800">
                      {review.name}
                    </h4>
                    <div className="rating-container flex items-center">
                      <div className="stars flex mr-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className="star">
                            {star <= review.rating ? (
                              <FaStar className="star-filled text-yellow-400" />
                            ) : (
                              <FaRegStar className="star-empty text-yellow-400" />
                            )}
                          </span>
                        ))}
                      </div>
                      <span className="review-date text-sm text-gray-500">
                        {review.date}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="review-content text-gray-700 pl-11">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-reviews text-gray-500">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
