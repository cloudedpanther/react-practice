import React from "react";
import NavigationList from "./NavigationList";

class Navigation extends React.Component {
  render() {
    const { data, onChangePage } = this.props;
    return (
      <nav>
        <ul>
          {data.map((content) => (
            <NavigationList
              key={content.id}
              id={content.id}
              title={content.title}
              onChangePage={onChangePage}
            />
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
