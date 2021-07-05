import React, { Component } from "react";
import AddForm from "./add-form";
import List from "./list";

class Lists extends Component {
  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    console.log(this.props.lists);
    return (
      <>
        <AddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.lists.map((list) => (
            <List key={list.id} list={list} />
          ))}
        </ul>
      </>
    );
  }
}

export default Lists;
