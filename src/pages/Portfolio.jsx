import React from "react";
import data from "../components/Pdata";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Portfolio.scss";
import LanguageIcon from "@mui/icons-material/Language";
import LaunchIcon from "@mui/icons-material/Launch";
function Portfolio() {
  return (
    <section className="work">
      <div className="myWork">
        <h1>My Work</h1>
        <div className="project-container">
          {data.map((project, index) => (
            <div
              key={project.name}
              className={`project-${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="image">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="project-details">
                <p className="name">{project.name}</p>
                <p className="desc">{project.desc}</p>
                <div className="techn">
                  {project.Technology.map((techn) => {
                    return <p className="individual-technology">{techn}</p>;
                  })}
                </div>
                <div className="link-button">
                  <a
                    href={project.gitLink}
                    target="_blank"
                    className="git-link"
                  >
                    <GitHubIcon className="icon" />
                  </a>
                  <div className="web-link">
                    <button>
                      <a href={project.link}>
                        {" "}
                        <LaunchIcon className="icon" />{" "}
                      </a>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
