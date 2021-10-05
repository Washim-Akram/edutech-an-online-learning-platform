import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Courses from './components/Courses/Courses';
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import NavigationBar from "./components/NavigationBar/NavigationBar";
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Router>
        <NavigationBar></NavigationBar>
        <Switch>

          <Route exact path = "/">
            <Home></Home>
          </Route>

          <Route exact path = "/home">
            <Home></Home>
          </Route>

          <Route exact path = "/about">
            <About></About>
          </Route>

          <Route exact path = "/courses">
            <Courses></Courses>
          </Route>

          <Route exact path = "/contact">
            <Contact></Contact>
          </Route>

          <Route path = "*">
            <NotFound></NotFound>
          </Route>
          
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
