import React from 'react';
import JoelImg from './../assets/img/joel.jpg';
import {Link}  from 'react-router-dom';

const Home = () => {
  return (
    <main role="main" className="inner cover">
      <img src={JoelImg} alt="Joel Kiggwe,a Front End Developer" />
      <h1 className="cover-heading">Front End Developer</h1>
      <p>
        Are you looking for an expert in the mobile web design, or an awesome
        web app with performance in mind. You've met the right person. Try me
        and click the next button.{" "}
      </p>
      <p className="lead">
        <Link to="#" className="btn btn-lg btn-secondary">
          Hire Me Now!
        </Link>
      </p>
    </main>
  );
};

export default Home;
