import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="col">
        <h3>
          Hy! I Am <br /> <span>SHOJIB</span>
        </h3>
        <p>
          I am a programing <b>Learner</b>. Recently i stared with programing
          hero with-out any coding knowleged i am 19years old virgin boy with a
          2010 model laptop
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
