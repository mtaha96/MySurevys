import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fecthSurveys } from "../actions";
class SurveyList extends Component {
  componentDidMount() {
    this.props.fecthSurveys();
  }
  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div key={survey._id} className="card darken-1">
          <div className="card-content ">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        {this.renderSurveys()}
        <div className="fixed-action-btn">
          <Link
            to="/surveys/new"
            className="btn-floating btn-large waves-effect waves-light red"
          >
            <i className="material-icons">add</i>
          </Link>
        </div>{" "}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { surveys: state.surveys };
}
export default connect(
  mapStateToProps,
  { fecthSurveys }
)(SurveyList);
