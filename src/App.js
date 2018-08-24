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
      notesFilter: 'all'
    }
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(!this.state.text.trim()) { return }
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
    switch (this.state.notesFilter) {
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
      notesFilter: 'all'
    })
  }

  completedNotes = () => {
    this.setState({
      notesFilter: 'completed'
    })
  }

  incompletedNotes = () => {
    this.setState({
      notesFilter: 'incompleted'
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form 
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          text={this.state.text}
        />
        {this.getFilteredNotes(this.state.notesFilter).map((todo, index) => {
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
    );
  }
}

export default App;
