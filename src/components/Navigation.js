import React from "react";
import NavigationList from "./NavigationList";

class Navigation extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <nav>
        <ul>
          {data.map((content) => (
            <NavigationList
              key={content.id}
              id={content.id}
              title={content.title}
            />
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
