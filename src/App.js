import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/app.css';  
import JoelImg from './assets/img/jj.jpg';

function App() {
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <header className="masthead mb-auto">
      <div className="inner">
        <h3 className="masthead-brand">Joel Kiggwe</h3>
        <nav className="nav nav-masthead justify-content-center">
          <a className="nav-link active" href="#">Home</a>
          <a className="nav-link" href="#">Projects</a>
          <a className="nav-link" href="#">Contact Me</a>
        </nav>
      </div>
    </header>
  
    <main role="main" className="inner cover">
       <img src={JoelImg} alt="Joel Kiggwe,a Front End Developer"/>
      <h1 className="cover-heading">Front End Developer</h1>
      <p>Are you looking for an expert in the mobile web design, or an awesome web app with performance in mind. 
        You've met the right person. Try me and click the next button. </p>
       <p className="lead">
        <a href="#" className="btn btn-lg btn-secondary">Hire Me Now!</a>
      </p>
    </main>
  
    <footer className="mastfoot mt-auto">
      <div className="inner">
        <p>Developed by <span>Joel</span>. Check the <a href="https://github.com/KenjxJJ/"> GitHub Repo</a></p>
      </div>
    </footer>
    </div>
  );
}

export default App;
