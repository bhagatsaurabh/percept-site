import React from "react";

import "./Header.css";
import HeaderSection from "./HeaderSection/HeaderSection";

class Header extends React.Component {
  static Left = ({ children }) => <HeaderSection align="left">{children}</HeaderSection>;
  static Right = ({ children }) => <HeaderSection align="right">{children}</HeaderSection>;

  render() {
    return <header>{this.props.children}</header>;
  }
}

export default Header;
