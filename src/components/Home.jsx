import React from "react";
import { useEffect, useState, createContext, useContext } from "react";
import Hero from "./Hero";
import { ReviewsContext } from "../App";
import Review from "./Review";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useContext(ReviewsContext);

  useEffect(() => {
    fetch("reviewData.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const sliceDtata = reviews.slice(0, 3);
  return (
    <div>
      <Hero></Hero>
      <h4 className="row-main ">People says about the course</h4>
      <div className="row">
        {sliceDtata.map((review) => (
          <Review review={review} key={review._id}></Review>
        ))}
      </div>
      <div className="btn">
        <button className="btn-primary" onClick={() => navigate("/reviews")}>
          All Reviews
        </button>
      </div>
    </div>
  );
};

export default Home;
