import React from 'react';
import './App.css';

import Navbar from "./pages/Navbar";
import Views from "./pages/view";
import Add from "./pages/add";
import Update from "./pages/update";

import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.slim";
import "popper.js";
import "bootstrap/dist/js/bootstrap.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Views} />
          <Route path="/add" exact component={Add}/>
          <Route path="/alter" exact component={Update}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
