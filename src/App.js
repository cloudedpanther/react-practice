import React from "react";
import Header from "./components/Header";
import Control from "./components/Control";
import Navigation from "./components/Navigation";
import Article from "./components/Article";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

class App extends React.Component {
  state = {
    mode: "create",
    selectedContent_id: 1,
    Header: { title: "WEB", sub: "World Wide Web!" },
    welcome: { title: "Welcome", desc: "Hello, React!!" },
    contents: [
      { id: 1, title: "HTML", desc: "HTML is a hypertext markup language." },
      { id: 2, title: "CSS", desc: "CSS is for design." },
      { id: 3, title: "JavaScript", desc: "JavaScript is for interactive." },
    ],
  };
  max_content_id = 3;
  getReadContent() {
    const { contents, selectedContent_id } = this.state;
    for (let i = 0; i < contents.length; i++) {
      if (contents[i].id === selectedContent_id) {
        return contents[i];
      }
    }
  }
  getContent() {
    const { mode, contents } = this.state;
    const welcomeTitle = this.state.welcome.title;
    const welcomeDesc = this.state.welcome.desc;
    let _article = null;
    if (mode === "welcome") {
      _article = <Article title={welcomeTitle} desc={welcomeDesc} />;
    } else if (mode === "read") {
      const _content = this.getReadContent();
      _article = <Article title={_content.title} desc={_content.desc} />;
    } else if (mode === "create") {
      _article = (
        <CreateContent
          onCreate={(_title, _desc) => {
            this.max_content_id++;
            const newContent = {
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            };
            const _content = contents.concat(newContent);
            this.setState({
              contents: _content,
            });
          }}
        />
      );
    } else if (mode === "update") {
      const _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onUpdate={function (id, title, desc) {
            let contents = Array.from(this.state.contents);
            for (let i = 0; contents.length; i++) {
              if (contents[i].id === id) {
                contents[i].title = title;
                contents[i].desc = desc;
                break;
              }
            }
            this.setState({
              contents,
            });
          }.bind(this)}
        />
      );
    }
    return _article;
  }
  render() {
    const {
      Header: { title, sub },
      contents,
      selectedContent_id,
    } = this.state;
    return (
      <div>
        <Header
          title={title}
          sub={sub}
          onChangeToWelcomePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        />
        <Control
          onChangeMode={(mode) => {
            if (mode === "delete") {
              if (
                window.confirm("Are you sure you want to delete this file?")
              ) {
                let contents = Array.from(this.state.contents);
                for (let i = 0; i < contents.length; i++) {
                  if (contents[i].id === selectedContent_id) {
                    contents.splice(i, 1);
                    break;
                  }
                }
                this.setState({ mode: "welcome", contents });
              }
            } else {
              this.setState({ mode });
            }
          }}
        />
        <Navigation
          data={contents}
          onChangePage={function (id) {
            this.setState({ mode: "read", selectedContent_id: id });
          }.bind(this)}
        />
        {this.getContent()}
      </div>
    );
  }
}

export default App;
