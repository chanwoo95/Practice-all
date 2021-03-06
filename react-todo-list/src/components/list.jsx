import React, { Component } from "react";
import "./list.css";

class List extends Component {
  handleDelete = () => {
    this.props.onDelete(this.props.list);
  };

  render() {
    const { name } = this.props.list;

    return (
      <>
        <li className="list">
          <span className="list-name">{name}</span>
          <button className="list-button" onClick={this.handleDelete}>
            <i className="far fa-trash-alt"></i>
          </button>
        </li>
      </>
    );
  }
}

export default List;
