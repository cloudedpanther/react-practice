import React from "react";

class UpdateContent extends React.Component {
  state = {
    id: this.props.data.id,
    title: this.props.data.title,
    desc: this.props.data.desc,
  };
  inputChangeHandler(event) {
    const newValue = event.target.value;
    this.setState({ [event.target.name]: newValue });
  }
  render() {
    const { id, title, desc } = this.state;
    const { onUpdate } = this.props;
    return (
      <article>
        <h2>Update</h2>
        <form
          action="/update_process"
          method="post"
          onSubmit={(event) => {
            event.preventDefault();
            onUpdate(id, title, desc);
          }}>
          <input type="hidden" name="id" value={id}></input>
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={this.inputChangeHandler.bind(this)}></input>
          </p>
          <p>
            <textarea
              name="desc"
              placeholder="Description"
              value={desc}
              onChange={function (event) {
                const newDesc = event.target.value;
                this.setState({ desc: newDesc });
              }.bind(this)}></textarea>
          </p>
          <p>
            <input type="submit" name="submit" value="Submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
