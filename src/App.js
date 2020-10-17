import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ContactMePage from "./pages/ContactMePage";
import ProjectsPage from "./pages/ProjectsPage";
function App() {
  return (
    <>
      <div className="cover-container d-flex w-100 h-100  flex-column">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route exact path="/projects">
              <ProjectsPage />
            </Route>
            <Route exact path="/contactme">
              <ContactMePage
                tel={"+(256) 771 968370"}
                email={"joelkiggwe94@gmail.com"}
                address={"Ntawo Mukono, Uganda"}
              />
            </Route>
            
          </Switch>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
