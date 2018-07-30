import React, { Component } from 'react';
import Form from './components/form';
import Todo from './components/todo';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      notes: [
        {todo: "test", completed: true},
        {todo: "test2", completed: false}
      ]
    }
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(!this.state.text.length) { return }
    const newTodo = {
      todo: this.state.text,
      completed: false
    }
    const notes = this.state.notes
    notes.push(newTodo)
    this.setState({
      text: '',
      notes: notes
    })
  }

  handleClick = (index) => {
    const notes = this.state.notes
    notes[index].completed = true
    this.setState({ notes })
  }

  handleDelete = (index) => {
    const notes = this.state.notes
    notes.splice(index, 1)
    this.setState({ notes })
  }

  render() {
    let notes = this.state.notes.map((todo, index) => {
      return <Todo key={index} note={todo} deleteTodo={this.handleDelete} handleClick={this.handleClick}/>
    });
    return (
      <div className="App">
        <div className="notes-wrapper">
        <Header />
        <Form 
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          text={this.state.text}
        />
        {notes}
        <Footer notesLength={this.state.notes.length} />
        </div>
      </div>
    );
  }
}

export default App;
