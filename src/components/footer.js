import React from 'react';

const Footer = (props) => {
    const allNotes = props.notes.length
    const completedNotes = props.notes.filter(n => n.completed).length
    const incompletedNotes = props.notes.filter(n => !n.completed).length
    return (
        <div className="footer">
            <button className="btn btn-filter" onClick={props.allNotes}>All {allNotes}</button> &nbsp;
            <button className="btn btn-filter" onClick={props.completedNotes}>Completed {completedNotes}</button> &nbsp;
            <button className="btn btn-filter" onClick={props.incompletedNotes}>Incompleted {incompletedNotes}</button>
        </div>
    );
}

export default Footer;