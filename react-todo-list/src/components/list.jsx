import React, { Component } from "react";
import "./list.css";

class List extends Component {
  onClick = (list) => {
    this.props.onDelete(list);
  };

  render() {
    const { name } = this.props.list;

    return (
      <>
        <li className="list">
          <span className="list-name">{name}</span>
          <button className="list-button" onClick={this.onClick}>
            <i className="far fa-trash-alt"></i>
          </button>
        </li>
      </>
    );
  }
}

export default List;
