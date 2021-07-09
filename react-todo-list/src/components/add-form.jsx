import React, { PureComponent } from "react";
import "./add-form.css";
class AddForm extends PureComponent {
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = "";
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          className="add-input"
          type="text"
          placeholder="할 일을 입력하세요."
        />
        <button className="add-button">
          <i className="fas fa-plus"></i>
        </button>
      </form>
    );
  }
}

export default AddForm;
