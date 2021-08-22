import React from "react";

class NavigationList extends React.Component {
  render() {
    const { id, title } = this.props;
    return (
      <li>
        <a href={"/contents/" + id}>{title}</a>
      </li>
    );
  }
}

export default NavigationList;
