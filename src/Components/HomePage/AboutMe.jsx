import React from "react";
import "./Aboutme.css";
import { BsFillSuitHeartFill } from "react-icons/bs";
import Me from "../3jsModels/me";
import Typewriter from "typewriter-effect";

const aboutMe = () => {
  return (
    <div className="aboutMe">
      <Me />

      <div className="Intro">
        <h2>ABOUT ME</h2>
        <p>
          <Typewriter
            options={{
              strings: ["Hello,", "Hi,", "Kuzu zangpola,"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <p style={{ marginLeft: "40px" }}>
          Lobzang Yonten is an undergrad at the College of Science and
          Technology, where he's working on his B.E. in Information Technology.
          He loves music, photography, and chess—he dares you to{" "}
          <a
            href="https://chess.com/play/Yonten2001"
            target="_SEJ"
            rel="noreferrer"
            style={{ color: "red" }}
          >
            challenge
          </a>{" "}
          him! Lobzang also dives deep into web and app development, gaming, and
          anime, always exploring new ways to blend creativity with technology.
          He's constantly on the lookout for the next cool project or
          collaboration. If you share his vibe, reach out for a chat, a game, or
          some coding fun.
        </p>
      </div>
    </div>
  );
};

export default aboutMe;
