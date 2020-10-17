import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import mobileSite from "../assets/img/mobileapp.jpg";
import makeupSite from "../assets/img/makeup.jpg";
import movieSite from "../assets/img/movie.jpg";

const projects = [
  {
    image: mobileSite,
    gitLink: "https://github.com/KenjxJJ/ChurchDemo",
    liveLink: "https://zen-turing-b4bc23.netlify.app/",
    description: `A church demo site for a online church with an evangelic mission.`,
  },
  {
    image: makeupSite,
    gitLink: "https://github.com/KenjxJJ/MakeUp-App",
    liveLink: "http://janes_makeup.surge.sh/",
    description: `A makeup site for the ladies' beauty products. Call them(Fiction!)`,
  },
  {
    image: movieSite,
    gitLink: "https://github.com/KenjxJJ/website",
    liveLink: "https://mynetflix90.netlify.app/",
    description: `You've got a favorite movie? Check this site and pick a favorite.`,
  },
];

class ProjectsPage extends Component {
  render() {
    let result;
    result = projects.map((proj) => (
      <Project key={proj.gitLink} project={proj} />
    ));
    return (
      <>
        <div className="smartdisplay">
        <main className="content mt-2 pt-2">
          <h2 style={{color: '#d2d9d4' }}
          className="text-md-left pl-md-5">Projects' Overview:</h2>
          <p className="mt-3 text-md-left pl-md-5">
            Check out some of the projects I have made.
          </p>
          <div className="project_list d-md-flex 
          flex-md-row justify-content-md-start
          
          ">{result}</div>
        </main>
        </div>
      </>
    );
  }
}

const Project = ({ project }) => {
  const { image, description, liveLink, gitLink } = project;
  return (
    <div className="project ml-md-3 fadeIn">
      <div className="projectImage">
        <img className="img-fluid" src={image} alt="" />
      </div>
      <p className="p-3" style={{borderTop: '5px solid #d2d9d4'}}>{description}</p>
      <div className="">
        <FontAwesomeIcon style={{ color: "#d2d9d4" }} icon={faLaptop} />
        <a
          style={{ color: "#d2d9d4" }}
          className="projectLink m-2 font-weight-bold text-uppercase"
          href={liveLink}
          >
          Live Site
        </a>
        <span className="m-4"></span>
        <FontAwesomeIcon style={{ color: "#739ba0" }} icon={faGithubAlt} />
        <a
          style={{ color: "#739ba0" }}
          className="projectLink m-2 font-weight-bold text-uppercase"
          href={gitLink }
          
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectsPage;
