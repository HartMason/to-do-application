import "./App.css";
import React, { Component } from "react";
import { render } from "@testing-library/react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      todos: [],
      text: "",
    };
  }

  onChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onClickHandler = () => {
    console.log(this.state.todos);
    this.setState({ text: this.state.todos }); //Not sure if this is correct
  };

  render() {
    return (
      <div>
        <h1>To Do's</h1>
        <input value={this.state.text} onChange={this.onChange} />

        <button onClick={this.onClickHandler}>Button</button>
      </div>
    );
  }
}

export default App;
