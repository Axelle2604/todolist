import React, { Component } from 'react';
import './todolist.css';
import Task from './Task.js';

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueInput: '',
      listTasks: [],
    };
  }

  onChange({ target: { value } }) {
    this.setState({
      valueInput: value,
    });
  }

  onKeyDown(e) {
    const { valueInput: listTitle, listTasks } = this.state;
    const hasEmptyTitle = listTitle.length === 0;
    const isTitleAlreadyExists = listTasks.indexOf(listTitle) >= 0;
    const isEnterKeyDown = e.keyCode === 13;

    if (!hasEmptyTitle && !isTitleAlreadyExists && isEnterKeyDown) {
      this.setState({
        listTasks: [...this.state.listTasks, this.state.valueInput],
        valueInput: '',
      });
    }
  }

  onClick() {
    this.props.deleteTodo(this.props.title);
  }

  render() {
    const { valueInput, listTasks } = this.state;
    return (
      <div className="todolist">
        <div className="containerHeader">
          <span className="titleTodo">{this.props.title}</span>
          <div className="inputTask">
            <input
              type="texte"
              onChange={this.onChange.bind(this)}
              onKeyDown={this.onKeyDown.bind(this)}
              value={valueInput}
            />
          </div>
          <span className="deleteIcon" onClick={this.onClick.bind(this)}>
            <i className="far fa-trash-alt" />
          </span>
        </div>
        {listTasks.map(task => (
          <Task inputValue={task} key={task} />
        ))}
      </div>
    );
  }
}

export default Todolist;
