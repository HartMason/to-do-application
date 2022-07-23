import "./App.css";
import React, { Component } from "react";
import { render } from "@testing-library/react";
import ToDoCard from "./TodoCard";
import BackGroundImage from "./BackGroundImage";


class App extends Component {
  constructor(props) {
    super(props); //super(props) it calls the PARENT CLASS constructor
    this.state = {
      isClicked: false,
      todos: [],
      text: "",
    }; // this.state represents the rendered values, ie. what's currently on the screen.
  }

  onChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleClick = () => {
    this.state.isClicked
      ? this.setState({ isClicked: false }) //setState is a built in function... when we call it this is how we update our state
      : this.setState({ isClicked: true });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.text],
    });
    this.setState({ text: "" });
  };

  handleDelete = (e) => {
    let list = this.state.todos;
    list.splice(e, 1) //removes list todo
    this.setState({   
      todos: [...list] //resets list
    })
  };

  render() {
    return (
      <div>
          <BackGroundImage/>
        <h1 className="title">To Do's</h1>
        {/* input is correct */}
        <form  className="jsx" onSubmit={this.handleSubmit}>
          <input value={this.state.text} onChange={this.onChange} />
          <button className='submit'onClick={this.handleClick}>Submit</button>
        </form>
        <ol className="listedItems">
          {this.state.todos.map((todo, index) => {
            return (
              <ToDoCard
              key={index}
              index={index}
              title={todo}
              clickToRemove={this.handleDelete}
              />
              );
            })}
        </ol>
      </div>
    );
  }
}

export default App;

//Questions for Jeff
//1.) e.target.value?
//2.)
