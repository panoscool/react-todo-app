import React, { Component } from 'react';
import Todo from './components/todo';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';

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
        <div className="notes-wrapper">
        <Header />
        <form onSubmit={this.handleSubmit}>
          <input 
            onChange={this.handleChange}
            value={this.state.text}
            placeholder="Add your note here"
            type="text"
          />
          <button className="btn btn-submit">Submit</button>
        </form>
        {notes}
        <Footer notesLength={this.state.notes.length} />
        </div>
      </div>
    );
  }
}

export default App;
