import React, { Component } from 'react';
import './App.css';
import Todolist from './components/Todolist.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTodoList: [],
      valueInput: '',
    };
  }

  onChange({ target: { value } }) {
    this.setState({
      valueInput: value,
    });
  }

  onClick() {
    const { valueInput: listTitle, listTodoList } = this.state;
    const hasEmptyTitle = listTitle.length === 0;
    const isTitleAlreadyExists = listTodoList.indexOf(listTitle) >= 0;

    if (!hasEmptyTitle && !isTitleAlreadyExists) {
      this.setState({
        listTodoList: [...listTodoList, listTitle],
        valueInput: '',
      });
    }
  }

  deleteTodo(title) {
    this.setState({
      listTodoList: this.state.listTodoList.filter(val => val !== title),
    });
  }

  render() {
    return (
      <div className="app">
        <h1>My ToDoList</h1>
        <div className="containerCreateTodo">
          <input
            className="inputTitle"
            type="texte"
            onChange={this.onChange.bind(this)}
            value={this.state.valueInput}
          />
          <div className="addTodoList" onClick={this.onClick.bind(this)}>
            <i className="fas fa-plus" />
          </div>
        </div>
        <div className="containerTodos">
          {this.state.listTodoList.map(todolist => (
            <Todolist
              key={todolist}
              title={todolist}
              deleteTodo={this.deleteTodo.bind(this)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
