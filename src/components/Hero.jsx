import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="col">
        <h3>
          Hy! Reviewing <br /> <span>Jhankars Course</span>
        </h3>
        <p>
          We are review web development course for you. We aks every people what
          they think how thare experience with <b>Jhankers</b> web development
          course
        </p>
        <a href="#">Explore More</a>
      </div>
      <div className="col">
        <img
          src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1622955835022.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
