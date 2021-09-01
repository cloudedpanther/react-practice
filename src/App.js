import React from "react";
import Header from "./components/Header";
import Control from "./components/Control";
import Navigation from "./components/Navigation";
import Article from "./components/Article";
import CreateContent from "./components/CreateContent";

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
  render() {
    const {
      mode,
      selectedContent_id,
      Header: { title, sub },
      contents,
    } = this.state;
    const welcomeTitle = this.state.welcome.title;
    const welcomeDesc = this.state.welcome.desc;
    let _article = null;
    let articleTitle = null;
    let articleDesc = null;
    if (mode === "welcome") {
      articleTitle = welcomeTitle;
      articleDesc = welcomeDesc;
      _article = <Article title={articleTitle} desc={articleDesc} />;
    } else if (mode === "read") {
      for (let i = 0; i < contents.length; i++) {
        if (contents[i].id === selectedContent_id) {
          articleTitle = contents[i].title;
          articleDesc = contents[i].desc;
          _article = <Article title={articleTitle} desc={articleDesc} />;
          break;
        }
      }
    } else if (mode === "create") {
      _article = (
        <CreateContent
          onCreate={(_title, _desc) => {
            console.log(_title, _desc);
          }}
        />
      );
    }
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
            this.setState({ mode });
          }}
        />
        <Navigation
          data={contents}
          onChangePage={function (id) {
            this.setState({ mode: "read", selectedContent_id: id });
          }.bind(this)}
        />
        {_article}
      </div>
    );
  }
}

export default App;
