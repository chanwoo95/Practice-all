import React , { Component } from 'react';

class List extends Component {
    render() {
        const { list } = this.props.list;
        
        return(
            <>
                <h2>추가된 목록</h2>
                <li>

                <span className="list-name"> {list}</span>
                <button className="list-button">+</button>
                </li>
            </>
        )
    }
}

export default List;
