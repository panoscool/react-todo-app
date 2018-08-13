import React from 'react';

const Footer = (props) => {
    const allNotes = props.notes.length
    let completedNotes = props.notes.filter(n => n.completed).length
    let incompletedNotes = props.notes.filter(n => !n.completed).length
    return (
        <div className="footer">
            <span className="filter all-notes" onClick={props.allNotes}>All {allNotes}</span> &nbsp;
            <span className="filter completed" onClick={props.completedNotes}>Completed {completedNotes}</span> &nbsp;
            <span className="filter incompleted" onClick={props.incompletedNotes}>Incompleted {incompletedNotes}</span>
        </div>
    );
}

export default Footer;