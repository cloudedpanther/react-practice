import React from "react";

class Control extends React.Component {
  render() {
    const { onChangeMode } = this.props;
    return (
      <ul>
        <li>
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              onChangeMode("create");
            }}>
            create
          </a>
        </li>
        <li>
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              onChangeMode("update");
            }}>
            update
          </a>
        </li>
        <li>
          <input
            type="button"
            value="delete"
            onClick={(event) => {
              event.preventDefault();
              onChangeMode("delete");
            }}></input>
        </li>
      </ul>
    );
  }
}

export default Control;
