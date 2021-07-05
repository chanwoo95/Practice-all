import React, { Component } from "react";

class List extends Component {
  render() {
    const { name } = this.props.list;

    return (
      <>
        <h2>추가된 목록</h2>
        <li>
          <span className="list-name">{name}</span>
          <button className="list-button">-</button>
        </li>
      </>
    );
  }
}

export default List;
