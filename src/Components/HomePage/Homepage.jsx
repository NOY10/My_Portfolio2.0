import React from "react";
import "./Homepage.css";
import Aboutme from "./AboutMe";
import Animatedpage from "../Animatedpage";
import pic from "../img/Cool.png";

const propic = () => {
  return (
    <Animatedpage>
      <div className="homepage">
        <div className="hello">
          <p>WELCOME TO MY PORTFOLIO</p>
        </div>
        <div className="propic">
          <div>
            <p>
              <span
                style={{ fontFamily: "Square Peg, cursive", fontSize: "40px" }}
              >
                Lobzang Yonten
              </span>{" "}
            </p>
            <p style={{ marginLeft: "30px", fontSize: "13px" }}>
              "One Day or Day One"
            </p>
          </div>
          <img className="me" src={pic} alt="" loading="lazy" />
        </div>

        <Aboutme />
      </div>
    </Animatedpage>
  );
};

export default propic;
