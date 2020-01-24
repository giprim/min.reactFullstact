import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.slim";
import "popper.js";
import "bootstrap/dist/js/bootstrap.js";


export default class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Navbar</a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <Link to="/" className="nav-item nav-link">
                View
            </Link>
              <Link to="/add" className="nav-item nav-link">
                Add
            </Link>
              <Link to="/update" className="nav-item nav-link">
                Update
            </Link>
              <Link to="/delete" className="nav-item nav-link">
                Delete
            </Link>

            </ul>
          </div>
        </div>
      </nav>
    );
  }
}