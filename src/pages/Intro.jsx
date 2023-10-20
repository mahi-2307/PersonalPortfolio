import React from "react";
import "../styles/Intro.scss";
import "../styles/Skills.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
function Intro() {
  return (
    <>
      <section id="intro">
        <div className="introContent">
          <span className="introText">
            <span className="hello">Hello,</span>
            <span className="introName">I'm Mahidhar</span>
            <br />
            <span className="introProfession">Full-Stack Web Developer</span>
            <br />
            <span className="introTagLine">
              Frontend Developer / Backend Developer
            </span>
          </span>
          <br />
          <div className="socialLinks">
            <a href="https://www.instagram.com/mahi2307_/">
              <InstagramIcon className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/mahidhar-reddy-katam-a2b35a24a/">
              <LinkedInIcon className="icon" />
            </a>
            <a href="mailto:mahireddy.katam@gmail.com">
              <EmailIcon className="icon" />
            </a>
            <a href="https://github.com/mahi-2307">
              <GitHubIcon className="icon" />{" "}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;
