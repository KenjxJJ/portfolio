import React from 'react';
import JoelImg from './../assets/img/joel.jpg';
import {Link}  from 'react-router-dom';

const Home = () => {
  return (
  <div className="smartdisplay">
    <main role="main" className="content inner cover mt-4 p-4 d-md-flex flex-md-row">
        <div className="landing_image flex-md-grow-1 order-md-2 p-4">
      <img src={JoelImg} alt="Joel Kiggwe,a Front End Developer" />
      </div>
      <div className="landing_text fadeIn flex-md-grow-1 p-3 text-md-left">
      <h1 className="cover-heading p-1">Front End Developer</h1>
      
      <p className="p-2">
        Are you looking for an expert in the mobile web design, or an awesome
        web app with performance in mind. You've met the right person. Try me
        and click the next button.{" "}
      </p>
      <p className="lead pl-md-3">
        <Link to="/contactme" className="btn btn-lg btn-secondary">
          Hire Me Now!
        </Link>
      </p>
      </div>
    </main>
    </div>
  );
};

export default Home;
