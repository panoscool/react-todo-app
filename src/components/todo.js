import React from 'react';

const Todo = (props) => {
    return (
        <div className="todo">
            <li>{props.note}<button onClick={props.deleteTodo}>x</button></li>
        </div>
    );
}

export default Todo;