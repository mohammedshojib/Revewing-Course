import React from "react";
import { FaRegStar, FaRegBell } from "react-icons/fa";
import "../styles/Review.css";

const Reviews = ({ review }) => {
  const { name, img, ratings, reviewdetails } = review;
  return (
    <div className="col-m">
      <h4>
        <img src={img ? img : img} alt="" /> {name}
      </h4>
      <p>
        <FaRegStar /> {ratings ? ratings : ratings}
      </p>
      <p>
        <FaRegBell /> {reviewdetails ? reviewdetails : reviewdetails}
      </p>
    </div>
  );
};

export default Reviews;
