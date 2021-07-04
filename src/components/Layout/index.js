import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// Scroll up button
import ScrollUpButton from "react-scroll-up-button";

//Import Icons
import FeatherIcon from "feather-icons-react";

// Layout Components
import Topbar from './Topbar'
import Footer from './Footer'

const CustomDot = () => {
  return (
    <React.Fragment>
      <FeatherIcon icon="arrow-up" className="icons" />
    </React.Fragment>
  );
};

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Topbar hasDarkTopBar={this.props.hasDarkTopBar} />

        {this.props.children}
        
        <Footer />

        <ScrollUpButton
          ContainerClassName="classForContainer"
          style={{ height: 36, width: 36 }}
          TransitionClassName="classForTransition"
          AnimationDuration={1}
        >
          <CustomDot />
        </ScrollUpButton>
      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
