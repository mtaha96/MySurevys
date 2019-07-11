import React, { Component } from "react";
import { Link } from "react-router-dom";
import SurveysList from "./SurveysList";
class Dashboard extends Component {
  render() {
    return (
      <div>
        <SurveysList />
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
