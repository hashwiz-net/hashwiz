import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import {
  Container,
} from "reactstrap";


class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleLine() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    return (
      <React.Fragment>
        {this.props.tagline ? this.props.tagline : null}
        <header id="topnav" className="defaultscroll sticky">
          <Container>
            <div>
              <a className="logo" href="/">
                <span className="logo-light-mode">
                  Hashwiz
                </span>
              </a>
            </div>
            <div className="buy-button">
              <a
                href="mail:info@hashwiz.net"
                target="_blank"
                rel="noopener noreferrer"
                id="buyButton"
                className="btn btn-primary"
              >
                Contact Us
              </a>
            </div>

            <div className="menu-extras">
              <div className="menu-item">
                <Link
                  to="#"
                  onClick={this.toggleLine.bind(this)}
                  className={
                    this.state.isOpen ? "navbar-toggle open" : "navbar-toggle"
                  }
                >
                  <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </Link>
              </div>
            </div>

            <div
              id="navigation"
              style={{ display: this.state.isOpen ? "block" : "none" }}
            >
              <ul className="navigation-menu" id="top-menu">
                <li>
                  <a href="#services">
                    Services
                  </a>
                </li>  

                <li>
                  <a href="#portfolio">
                    Portfolio
                  </a>
                </li>

                <li>
                  <a href="#freequote">
                    Get a Quote
                  </a>
                </li>
              </ul>
              <div className="buy-menu-btn d-none">
                <a
                  to="mail:info@hashwiz.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </Container>
        </header>
      </React.Fragment>
    );
  }
}

export default withRouter(Topbar);
