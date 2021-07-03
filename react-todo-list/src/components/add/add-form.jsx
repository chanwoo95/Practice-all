import React, { Component } from 'react';

class AddForm extends Component {
    constructor() {
        const inputRef = React.createRef();
        const value = inputRef.current();
    }
    render(){
        return(
            <input ref={this.inputRef} type="text" />
        );
    }
}

export default AddForm;