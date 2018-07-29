import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
          <input 
            onChange={props.handleChange}
            value={props.text}
            placeholder="Add your note here"
            type="text"
          />
          <button className="btn btn-submit">Submit</button>
        </form>
    );
}

export default Form;