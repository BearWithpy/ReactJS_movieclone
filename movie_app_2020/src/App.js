import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState({ count: this.state.count + 1 });
    //It's bad...
  };
  sub = () => {
    this.setState((current) => ({ count: current.count-- }));
    // Using a "current" method is way better!
  };

  render() {
    return (
      <div>
        <h1>The Number is {this.state.count}</h1>
        <button onClick={this.add}>Plus</button>
        <button onClick={this.sub}>Minus</button>
      </div>
    );
  }
}

export default App;
