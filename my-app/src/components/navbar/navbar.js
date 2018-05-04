import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <ul>
          <li className="navLeft">Happy Racing</li>
          <li className="navMiddle"></li>
          <li className="navRight">Score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;