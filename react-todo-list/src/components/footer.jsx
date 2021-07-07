import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return <span className="count">{this.props.totalCount}개의 메모</span>;
  }
}

export default Footer;
