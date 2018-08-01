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
      notes: []
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
    const newNotes = this.state.notes
    newNotes.push(newTodo)
    this.setState({
      text: '',
      notes: newNotes
    })
  }

  handleClick = (index) => {
    const newNotes = this.state.notes
    newNotes[index].completed = !newNotes[index].completed
    this.setState({ newNotes })
  }
  

  handleDelete = (index) => {
    const newNotes = this.state.notes
    newNotes.splice(index, 1)
    this.setState({ newNotes })
  }

  render() {
    let notes = this.state.notes.map((todo, index) => {
      return <Todo key={index} note={todo} index={index} deleteTodo={this.handleDelete} handleClick={this.handleClick}/>
    });
    let completedCount = this.state.notes.filter(n => n.completed).length;
    let incompletedCount = this.state.notes.filter(n => !n.completed).length;
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
        <Footer 
          notesLength={this.state.notes.length} 
          completedCount={completedCount} 
          incompletedCount={incompletedCount} 
        />
        </div>
      </div>
    );
  }
}

export default App;
