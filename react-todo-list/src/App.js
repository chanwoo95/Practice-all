import React, { Component } from "react";
import "./app.css";
import Lists from "./components/lists";

class App extends Component {
  state = {
    lists: [
      { id: 1, name: "coding" },
      { id: 2, name: "coding" },
    ],
  };

  handleAdd = (name) => {
    const lists = [...this.state.lists, { id: Date.now(), name }];
    this.setState({ lists });
  };

  render() {
    return <Lists lists={this.state.lists} onAdd={this.handleAdd} />;
  }
}

export default App;
