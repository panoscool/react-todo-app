import React from 'react';

const Footer = (props) => {
    return (
        <div className="footer">
            All {props.allNotes} &nbsp;
            Completed {props.completedNotes} &nbsp;
            Incompleted {props.incompletedNotes}
        </div>
    );
}

export default Footer;