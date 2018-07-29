import React from 'react';

const Todo = (props) => {
    return (
        <div className="todo-wrapper">
            <li style={{ textDecoration: props.note.isCompleted ? 'line-through' : 'none' }}>
                <button className="btn btn-remove" onClick={props.deleteTodo}>X</button>
                {props.note.todo}
                <button className="btn btn-status" onClick={props.handleClick}>{props.note.isCompleted ? "Undo" : "Complete" }</button>
            </li>
        </div>
    );
}

export default Todo;