import React, { Component } from "react";
import { Row, Col } from "react-grid-system";
import ClassNames from "classnames";

class NavPanel extends Component {
  state = {
    hovered: false,
    phone: false,
    trigger: false
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
    window.removeEventListener("scroll", this.handleScroll);
  }

  updateWindowDimensions = () => {
    if (window.innerWidth < 450) {
      this.setState({ phone: true });
    } else {
      this.setState({ phone: false });
    }
  };

  handleScroll = event => {
    if (this.state.trigger !== this.props.trigger) {
      this.setState({ trigger: this.props.trigger });
      if (this.state.trigger) {
        this.setState({ hovered: true });
      }
      if (!this.state.trigger) {
        this.setState({ hovered: false });
      }
    }
  };

  handleOnMouseOver = () => {
    this.setState({ hovered: true });
  };
  handleOnMouseLeave = () => {
    this.setState({ hovered: false });
  };

  render() {
    var animationClass = ClassNames({
      animationWrapper: true,
      animationWapperHovered: this.state.hovered
    });
    return (
      <Row
        className="panelStyle"
        onMouseOver={this.handleOnMouseOver}
        onMouseLeave={this.handleOnMouseLeave}
      >
        <Col xs={12} className={animationClass}>
          <div className="frame">
            <div className="extra_1" />
            <div className="extra_2">
              <div className="extra_2_2" />
            </div>
            <div className="textWrapper">
              <p className="textStyle">
                <b>{this.props.text1}</b>
              </p>
              <p className="textStyle">
                <b>{this.props.text2}</b>
              </p>
              <p className="textStyle">
                <b>{this.props.text3}</b>
              </p>
            </div>
            <div className="extra_3" />
            <div className="extra_4" />
          </div>
        </Col>
      </Row>
    );
  }
}

export default NavPanel;
