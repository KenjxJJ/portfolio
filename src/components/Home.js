import React from 'react';
import JoelImg from './../assets/img/jj.jpg';

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
        <a href="#" className="btn btn-lg btn-secondary">
          Hire Me Now!
        </a>
      </p>
    </main>
  );
};

export default Home;
