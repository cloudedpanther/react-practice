import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Article from "./components/Article";

class App extends React.Component {
  state = {
    Header: { title: "WEB", sub: "World Wide Web!" },
    contents: [
      { id: 1, title: "HTML", desc: "HTML is a hypertext markup language." },
      { id: 2, title: "CSS", desc: "CSS is for design." },
      { id: 3, title: "JavaScript", desc: "JavaScript is for interactive." },
    ],
  };
  render() {
    const {
      Header: { title, sub },
      contents,
    } = this.state;
    return (
      <div>
        <Header title={title} sub={sub} />
        <Navigation data={contents} />
        <Article />
      </div>
    );
  }
}

export default App;
