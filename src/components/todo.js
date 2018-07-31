import React from 'react';

const Todo = (props) => {
    return (
        <div className="todo-wrapper">
            <li style={{ textDecoration: props.note.completed ? 'line-through' : 'none' }}>
                <button className="btn btn-remove" onClick={() => props.deleteTodo(props.index)}>Remove</button>
                {props.note.todo}
                <button className="btn btn-status" onClick={() => props.handleClick(props.index)}>{props.note.completed ? "Undo" : "Done" }</button>
            </li>
        </div>
    );
}

export default Todo;