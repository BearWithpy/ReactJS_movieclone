import React from "react";
// import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({ count: current.count++ }));
  };
  sub = () => {
    this.setState((current) => ({ count: current.count-- }));
    // Using a "current" method is way better!
  };

  componentDidMount() {
    console.log("Component rendered");
  }
  componentDidUpdate() {
    console.log("I'm updated");
  }
  componentWillUnmount() {
    console.log("Goodbye, cruel world");
  }

  render() {
    console.log("I'm rendering");
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

// 20200829 Review
