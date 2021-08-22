import React from "react";

class Header extends React.Component {
  render() {
    const { title, sub } = this.props;
    return (
      <header>
        <h1>{title}</h1>
        <p>{sub}</p>
      </header>
    );
  }
}

export default Header;
