import React from "react";
import "../styles/About.scss";
import UIdesign from "../assets/ui-design.png";
import webDesign from "../assets/website-design.png";
import Fullstack from "../assets/fullstack.png";
import gif from "../assets/technologies/about-gif.gif";
function Skills() {
  return (
    <section className="about">
      <p id="about">About</p>
      <div className="container">
        <div className="whoAmI">
          <p id="whoAmI">Who am I</p>
          <div className="imageandtext">
          <img src={gif} alt="gif" id="gif" />
            <p className="text">
              I'm a very ambitious full-stack developer looking for a role as a
              software developer with the opportunity to work with the latest
              technologies on challenging and diverse projects.
              <br />
              <br />
              <span>
                To describe me in one line. I'm quiet confident, naturally
                curious, and continuously work on improving my skill to provide
                fesable solutions to a problem.
              </span>
            </p>
           
          </div>
        </div>
        <div className="whatIdo">
          <p id="whoAmI">What I Do</p>
          <div className="seconddiv">
          <div className="info">
            <img src={UIdesign} alt="ui-design" />
            <div className="skillBarText">
              <h3>UI/UX</h3>
            </div>
          </div>
          <div className="info">
            <img src={webDesign} alt="ui-design" />
            <div className="skillBarText">
              <h3>Website Design</h3>
            </div>
          </div>
          <div className="info">
            <img src={Fullstack} alt="ui-design" />
            <div className="skillBarText">
              <h3>Fullstack Development</h3>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
