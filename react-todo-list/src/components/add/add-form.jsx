import React, { Component } from 'react';
import Lists from '../lists/lists';

class AddForm extends Component {
    
        inputRef = React.createRef();

        onSubmit = (event) => {
            event.preventDefault();
            const name = this.inputRef.current.value;
            name && this.props.onAdd(name);
            
        }
        
    
    render(){

        return(
            <form onSubmit={this.onSubmit}>
            <input ref={this.inputRef} type="text" />
            <button>+</button>
            </form>
        );
    }
}

export default AddForm;