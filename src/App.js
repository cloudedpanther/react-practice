import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Article from "./components/Article";

class App extends React.Component {
  state = {
    mode: "read",
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
    let articleTitle = null;
    let articleDesc = null;
    if (mode === "welcome") {
      articleTitle = welcomeTitle;
      articleDesc = welcomeDesc;
    } else if (mode === "read") {
      for (let i = 0; i < contents.length; i++) {
        if (contents[i].id === selectedContent_id) {
          articleTitle = contents[i].title;
          articleDesc = contents[i].desc;
          break;
        }
      }
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
        <Navigation
          data={contents}
          onChangePage={function (id) {
            this.setState({ mode: "read", selectedContent_id: id });
          }.bind(this)}
        />
        <Article title={articleTitle} desc={articleDesc} />
      </div>
    );
  }
}

export default App;
