import React, { Component } from "react";
import { connect } from "react-redux";
class Landing extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="header center orange-text">SurveyApe</h1>
        <div className="row center">
          <h5 className="header col s12 light">
            Collect feedback from your users
          </h5>
        </div>
        <div className="row center">
          <a
            href="/auth/google"
            id="download-button"
            className="btn-large waves-effect waves-light orange"
          >
            Get Started
          </a>
        </div>
        <div className="section">
          <div className="row">
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text">
                  <i className="material-icons large">flash_on</i>
                </h2>
                <h5 className="center">Speed Up Feedback Collection</h5>
                <p className="light">
                  Collect feedback from your users using our quick to create
                  surveys. Each survey costs 1 credit and allows for up to
                  100,000 recipients, so you will get the feedback that you
                  need!
                </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text">
                  <i className="material-icons large">group</i>
                </h2>
                <h5 className="center">User Experience Focused</h5>

                <p className="light">
                  Your survey recipients will recieve a well styled email that
                  is easy to use and understand. Upon submitting feedback, your
                  end users will be notified of their successful vote.
                </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center light-blue-text">
                  <i className="material-icons large">settings</i>
                </h2>
                <h5 className="center">Easy to work with</h5>

                <p className="light">
                  Our dashboard provides you with all the tools you'll need to
                  start and monitor your survey campaigns. Create new sruveys.
                  Monitor your existing surveys, we provide metrics regarding
                  your survey vote count and activity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
