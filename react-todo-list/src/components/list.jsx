import React, { Component } from "react";
import "./list.css";

class List extends Component {
  render() {
    const { name } = this.props.list;

    return (
      <>
        <li>
          <span className="list-name">{name}</span>
          <button className="list-button">
            <i className="far fa-trash-alt"></i>
          </button>
        </li>
      </>
    );
  }
}

export default List;
