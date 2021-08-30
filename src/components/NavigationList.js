import React from "react";

class NavigationList extends React.Component {
  render() {
    const { id, title, onChangePage } = this.props;
    return (
      <li>
        <a
          href={"/contents/" + id}
          onClick={function (event) {
            event.preventDefault();
            onChangePage(id);
          }}>
          {title}
        </a>
      </li>
    );
  }
}

export default NavigationList;
