import React from "react";

class CreateContent extends React.Component {
  render() {
    const { onCreate } = this.props;
    return (
      <article>
        <h2>Create</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={(event) => {
            event.preventDefault();
            const { title, desc } = event.target;
            onCreate(title.value, desc.value);
          }}>
          <p>
            <input type="text" name="title" placeholder="Title"></input>
          </p>
          <p>
            <textarea name="desc" placeholder="Description"></textarea>
          </p>
          <p>
            <input type="submit" name="submit" value="Submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default CreateContent;
