import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Article from "./components/Article";

class App extends React.Component {
  state = {
    mode: "welcome",
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
      articleTitle = contents[0].title;
      articleDesc = contents[0].desc;
    }
    return (
      <div>
        <Header title={title} sub={sub} />
        <Navigation data={contents} />
        <Article title={articleTitle} desc={articleDesc} />
      </div>
    );
  }
}

export default App;
