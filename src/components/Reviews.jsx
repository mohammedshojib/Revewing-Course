import React from "react";
import { useContext } from "react";
import { ReviewsContext } from "../App";
import Review from "./Review";

const Reviews = () => {
  const [reviews] = useContext(ReviewsContext);
  return (
    <div className="row">
      {reviews.map((review) => (
        <Review review={review} key={review._id}></Review>
      ))}
    </div>
  );
};

export default Reviews;
