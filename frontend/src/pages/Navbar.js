import React from "react";
import { Link } from "react-router-dom";


export default class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top shadow">
        <div className="container">
          <Link className="navbar-brand" to="/">Navbar</Link>

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
              <Link to="/alter" className="nav-item nav-link">
                Alter
              </Link>
              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}