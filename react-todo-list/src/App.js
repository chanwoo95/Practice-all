import React, { Component } from "react";
import "./app.css";
import Lists from "./components/lists";
import Footer from "./components/footer";

class App extends Component {
  state = {
    lists: [{ id: 1, name: "기술 블로그 작성" }],
  };

  handleAdd = (name) => {
    const lists = [...this.state.lists, { id: Date.now(), name }];
    this.setState({ lists });
  };

  handleDelete = (list) => {
    const lists = this.state.lists.filter((item) => item.id !== list.id);
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
          <Lists
            lists={this.state.lists}
            onAdd={this.handleAdd}
            onDelete={this.handleDelete}
          />
          <Footer
            totalCount={this.state.lists.filter((item) => item.id).length}
          />
        </div>
      </section>
    );
  }
}

export default App;
