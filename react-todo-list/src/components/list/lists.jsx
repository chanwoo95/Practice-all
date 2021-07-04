import React, { Component } from 'react';
import AddForm from '../add/add-form';

class Lists extends Component {
    

    handleAdd = () => {
        this.props.onAdd();

    }
    render() {
        return(
            <>
            <AddForm onAdd={this.handleAdd}/>
            <ul>
                {
                   this.props.lists.map()
                }
            </ul>
            </>
        );
    }
}

export default Lists;