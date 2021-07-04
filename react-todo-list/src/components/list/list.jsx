import React , { Component } from 'react';

class List extends Component {
    render() {
        // const { list } = this.props.list;
        const { name } = this.props.name;
        
        return(
            <>
                <h2>추가된 목록</h2>
                <li>

                <span className="list-name"> {name}</span>
                <button className="list-button">+</button>
                </li>
            </>
        )
    }
}

export default List;
