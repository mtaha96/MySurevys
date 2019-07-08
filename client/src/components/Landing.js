import React, { Component } from "react";
import { connect } from "react-redux";
class Landing extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1> My Surveys!</h1>
        Collect Feedback from users.
      </div>
    );
  }
}
export default Landing;
