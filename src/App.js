import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ContactMePage from "./pages/ContactMePage";
import ProjectsPage from "./pages/ProjectsPage";
import Error404Page from "./pages/Error404Page";

function App() {
  return (
    <>
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Router>
        <Navigation />
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/projects">
              <ProjectsPage/>
            </Route>
            <Route path="/contactme">
              <ContactMePage tel={'+(256) 771 968370'} email={'joelkiggwe94@gmail.com'} address={'Ntawo Mukono, Uganda'}/>
            </Route>
            <Route path="*">
              <Error404Page/>
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
