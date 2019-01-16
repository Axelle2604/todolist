import React, { Component } from 'react';
import './task.css';

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
    };
  }

  onChange() {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  render() {
    return (
      <div className="task">
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange.bind(this)}
          id={Date.now}
        />
        <label
          htmlFor={this.props.inputValue}
          className={this.state.isChecked ? 'isNotChecked' : 'isChecked'}
        >
          <span className="subject">{this.props.inputValue}</span>
        </label>
      </div>
    );
  }
}

export default Task;
