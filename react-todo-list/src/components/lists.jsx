import React, { Component } from "react";
import AddForm from "./add-form";
import List from "./list";
import "./lists.css";

class Lists extends Component {
  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    console.log(this.props.lists);
    return (
      <>
        <h2>할 일 목록</h2>
        <AddForm onAdd={this.handleAdd} />
        <h2 className="add-title">추가된 목록</h2>
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
