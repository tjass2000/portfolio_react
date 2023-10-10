import React from "react";

export const Home = () => {
  return (
    <div className="home" id="#home">
      <div className="homeDetail">
        <h5>HI THERE 👋🏼 , I'M</h5>
        <div className="animatedLogo">
          <video autoPlay playsInline muted loop preload="true">
            <source src="gradient.mp4" />
          </video>
          <img alt="Name" src="tejas.svg"></img>
        </div>
        <h4>DEVELOPER + DESIGNER 👨🏻‍💻</h4>
        <p>
          I'm a design minded front-end developer <br /> based in Bangalore,
          India.
        </p>
        <button
          onClick={() => {
            var contactEle = document.getElementById("#contact");
            contactEle.scrollIntoView({ behavior: "smooth" });
          }}
        >
          HIRE ME
        </button>
      </div>
    </div>
  );
};
