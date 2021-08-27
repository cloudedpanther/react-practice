import React from "react";

class Article extends React.Component {
  render() {
    const { title, desc } = this.props;
    return (
      <article>
        <h2>{title}</h2>
        <p>{desc}</p>
      </article>
    );
  }
}

export default Article;
