import React from "react";
import { useNavigate } from "react-router-dom";
import notFound from "../assets/images.jpg";

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div className="qanda not-found">
      <h4>404 Not Found</h4>
      <img src={notFound} alt="" />
      <br />
      <button className="btn-primary" onClick={() => navigate("/")}>
        Go Back To Home
      </button>
    </div>
  );
};

export default Notfound;
