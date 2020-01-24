import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import "jquery/dist/jquery.slim"
import "popper.js"
import "bootstrap/dist/js/bootstrap.js"


export default class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">

        <a className="navbar-brand" href="#">Navbar</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">View</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Add</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Update</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Delete</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}