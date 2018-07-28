import React from 'react';

const Todo = (props) => {
    return (
        <div className="todo-wrapper">
            <li><button className="btn btn-remove" onClick={props.deleteTodo}>Remove</button>{props.note}</li>
        </div>
    );
}

export default Todo;