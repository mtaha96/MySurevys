import React, { Component } from "react";
import { Link } from "react-router-dom";
class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1> Dashboard</h1>
        <div className="fixed-action-btn">
          <Link
            to="/surveys/new"
            class="btn-floating btn-large waves-effect waves-light red"
          >
            <i class="material-icons">add</i>
          </Link>
        </div>{" "}
      </div>
    );
  }
}
export default Dashboard;
