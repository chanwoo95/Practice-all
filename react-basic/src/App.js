import './App.css';
import React  from 'react';

class App extends React.Component {
  state = {
    numberOfLikes : 0
  }

  handleIncrease = () => {
    this.setState({numberOfLikes: this.state.numberOfLikes + 1});
  }

  handleDecrease = () => {
    this.setState({numberOfLikes: this.state.numberOfLikes - 1});
  }

  render() {
    return (
      <div>
        <div>{this.state.numberOfLikes}</div>
        <button onClick={this.handleIncrease}>Plus</button>
        <button onClick={this.handleDecrease}>Minus</button>
      </div>
    )
  }
}

export default App;
