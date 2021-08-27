import React from "react";

class Header extends React.Component {
  render() {
    const { title, sub } = this.props;
    return (
      <header>
        <h1>
          <a
            href="/"
            onClick={function (event) {
              event.preventDefault();
            }}>
            {title}
          </a>
        </h1>
        <p>{sub}</p>
      </header>
    );
  }
}

export default Header;
