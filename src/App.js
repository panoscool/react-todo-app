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
      notes: [],
      noteFilter: 'all'
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
    const newNotes = Array.from(this.state.notes)
    newNotes.push(newTodo)
    this.setState({
      text: '',
      notes: newNotes
    })
  }

  handleClick = (index) => {
    const newNotes = Array.from(this.state.notes)
    newNotes[index].completed = !newNotes[index].completed
    this.setState({ notes: newNotes })
  }
  

  deleteTodo = (index) => {
    const newNotes = Array.from(this.state.notes)
    newNotes.splice(index, 1)
    this.setState({ notes: newNotes })
  }

  getFilteredNotes() {
    switch (this.state.noteFilter) {
      case 'completed':
        return this.state.notes.filter(t => t.completed);
      case 'incompleted':
        return this.state.notes.filter(t => !t.completed);
      case 'all':
      default:
        return this.state.notes;
    }
  }

  allNotes = () => {
    this.setState({
      noteFilter: 'all'
    })
  }

  completedNotes = () => {
    this.setState({
      noteFilter: 'completed'
    })
  }

  incompletedNotes = () => {
    this.setState({
      noteFilter: 'incompleted'
    })
  }

  render() {
    return (
      <div className="App">
        <div className="notes-wrapper">
        <Header />
        <Form 
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          text={this.state.text}
        />
        {this.getFilteredNotes(this.state.noteFilter).map((todo, index) => {
          return (
            <Todo 
              key={index} 
              note={todo} 
              deleteTodo={() => this.deleteTodo(index)} 
              handleClick={() => this.handleClick(index)}/>
          );
        })}
        <Footer 
          notes={this.state.notes}
          allNotes={this.allNotes}
          completedNotes={this.completedNotes}
          incompletedNotes={this.incompletedNotes} 
        />
        </div>
      </div>
    );
  }
}

export default App;
