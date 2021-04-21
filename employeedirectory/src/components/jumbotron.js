import React from "react";
import "../styles/jumbotron.css"

function Jumbotron() {
  return (
  <div>
    <div className="jumbotron jumbotron-fluid" id="jumboTron">
      <div className="container">
        <h1 className="display-4"><i className="fas fa-user-friends"></i> <b> The Company Directory</b></h1>
        <p className="lead">Search for an Employee by First of Last Name</p>
      </div>
    </div>
  </div>
  );
}

export default Jumbotron;