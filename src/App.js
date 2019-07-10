import React from "react";
import "./App.css";
import { connect } from "react-redux";

import Count from "./components/count";

class App extends React.Component {
  componentDidMount() {
    console.log("ini propsnya", this.props);
  }

  render() {
    return (
      <div className="App App-header">
        <h1>
          <Count />
        </h1>
        <div>
          <button onClick={() => this.props.dispatch({ type: "INCREMENT" })}>
            +
          </button>
        </div>
        <br></br>
        <div>
          <button onClick={() => this.props.dispatch({ type: "DECREMENT" })}>
            -
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
