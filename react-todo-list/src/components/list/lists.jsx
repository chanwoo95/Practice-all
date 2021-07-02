import React, { Component } from 'react';
import List from './list';

class Lists extends Component {
    state = {
        lists : [
            {list:"coding"}, {list: "playing"}, {list:"eating"}
        ],
    };

    render() {
        return(
            <ul>
                {
                    this.state.lists.map( list => <List list={list}/>)
                }
            </ul>
        );
    }
}

export default Lists;