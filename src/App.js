import React, { Component } from 'react';
import Todo from './components/todo';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      notes: []
    }
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let notesArray = this.state.notes
    notesArray.push(this.state.text)
    this.setState({
      text: ''
    })
  }

  handleDelete = (index) => {
    let notesArray = this.state.notes
    notesArray.splice(index, 1)
    this.setState({
      notes: notesArray
    })
  }

  render() {
    let notes = this.state.notes.map((todo, index) => {
      return <Todo key={index} note={todo} deleteTodo={this.handleDelete} />
    });
    return (
      <div className="App">
        {notes}
        <form onSubmit={this.handleSubmit}>
          <input 
            onChange={this.handleChange}
            value={this.state.value}
            placeholder="Add your note here"
            type="text"
          />
          <button>Add #{this.state.notes.length +1}</button>
        </form>
      </div>
    );
  }
}

export default App;
