import React, { Component } from "react";
import "./app.css";
import Lists from "./components/lists";

class App extends Component {
  state = {
    lists: [{ id: 1, name: "" }],
  };

  handleAdd = (name) => {
    const lists = [...this.state.lists, { id: Date.now(), name }];
    this.setState({ lists });
  };

  render() {
    return (
      <section>
        <div className="container">
          <div className="header">
            <i className="far fa-calendar-minus"></i>
            <i className="fas fa-ellipsis-h"></i>
          </div>
          <Lists lists={this.state.lists} onAdd={this.handleAdd} />
        </div>
      </section>
    );
  }
}

export default App;
