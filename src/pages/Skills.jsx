import React from "react";
import "../styles/Skills.scss";
import react from "../assets/technologies/react.png";
import redux from "../assets/technologies/redux.png";
import node from "../assets/technologies/node-js.png";
import express from "../assets/technologies/express.png";
import html from "../assets/technologies/html.png";
import css from "../assets/technologies/css.png";
import js from "../assets/technologies/javascript.webp";
import java from "../assets/technologies/java.png"
import mysql from "../assets/technologies/sql.png"
import mongo from "../assets/technologies/MongoDB-Logo.png"
import firebase from "../assets/technologies/firebase.png"

function SkillsComponent() {
  return (
    <section className="Skills">
      <h3 className="skills">My Skills</h3>
      <div className="skillsContainer">
        <div className="eachskill">
          <img src={html} alt="react" />

          <p>HTML</p>
        </div>
        <div className="eachskill">
          <img src={css} alt="react" />

          <p>CSS</p>
        </div>
        <div className="eachskill">
          <img src={react} alt="react" />

          <p>React</p>
        </div>
        <div className="eachskill">
          <img src={redux} alt="react" />
          <p>Redux</p>
        </div>
        <div className="eachskill">
          <img src={node} alt="react" />
          <p>Node JS</p>
        </div>
        <div className="eachskill">
          <img src={express} alt="react" />

          <p>Express JS</p>
        </div>

        <div className="eachskill">
          <img src={js} alt="react" />

          <p>JS</p>
        </div>
        <div className="eachskill">
          <img src={java} alt="react" />

          <p>Java</p>
        </div>
        <div className="eachskill">
          <img src={mysql} alt="react" />

          <p>MySQL</p>
        </div>
        <div className="eachskill">
          <img src={mongo} alt="react" />

          <p>MongoDB</p>
        </div>
        <div className="eachskill">
          <img src={firebase} alt="react" />

          <p>Firebase</p>
        </div>
      </div>
    </section>
  );
}

export default SkillsComponent;
