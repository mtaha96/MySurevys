import React, { Component } from "react";
class Landing extends Component {
  render() {
    return (
      <div>
        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <br />
              <br />
              <h1 className="header center white-text">MySurvey</h1>
              <div className="row center">
                <h5 className="white-text header col s12 light">
                  A modern responsive website that allows you to create surveys
                  and send them as emails to your customers!
                </h5>
              </div>
              <div className="row center">
                <a
                  href="/auth/google/"
                  id="download-button"
                  className="btn-large waves-effect waves-light teal lighten-1"
                >
                  Get Started
                </a>
              </div>
              <br />
              <br />
            </div>
          </div>
          <div className="parallax">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/30/12/09/question-mark-1872634_1280.jpg"
              alt="Unsplashed background img 1"
              style={{
                transform: "translate3d(-50%, 233.814px, 0px)",
                opacity: 1
              }}
            />
          </div>
        </div>
        <div className="container">
          <div className="section">
            {/*   Icon Section   */}
            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text">
                    <i className="material-icons">flash_on</i>
                  </h2>
                  <h5 className="center">
                    Speeds up feedback collecting process
                  </h5>
                  <p className="light">
                    We did most of the heavy lifting for you to provide a a
                    state of the art website that allows you to set up surveys
                    and send them out in less than a minute. Also, we save the
                    surveys so you could always come back and check them.
                  </p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text">
                    <i className="material-icons">group</i>
                  </h2>
                  <h5 className="center">User Experience Focused</h5>
                  <p className="light">
                    By utilizing elements and principles of Material Design, we
                    were able to create a framework that incorporates components
                    and animations that provide more feedback to users.
                    Additionally, a single underlying responsive system across
                    all platforms allow for a more unified user experience.
                  </p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center brown-text">
                    <i className="material-icons">settings</i>
                  </h2>
                  <h5 className="center">Easy process to set up</h5>
                  <p className="light">
                    We have provided a very easy way to set up your account. You
                    can start easily today by signing in with your google
                    account. We also provide a very secure third party payment
                    plugin that allows you to add funds as you please withut
                    worrying.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="page-footer teal">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Bio</h5>
                <p className="grey-text text-lighten-4">
                  This website was set up by Mohammed Taha. A new Computer
                  Engineering graduate. I have set up this website to learn and
                  apply full stack developement using React/Redux. This
                  experience helped me learn a lot of useful tools like Google
                  Authorization, accepting payments using stripe, and many more.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              Made by <a className="brown-text text-lighten-3">Mohammed Taha</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Landing;
