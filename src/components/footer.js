import React from 'react';

const Footer = (props) => {
    return (
        <div className="footer">
            All {props.notesLength} &nbsp;
            Completed {props.completedCount} &nbsp;
            Incompleted {props.incompletedCount}
        </div>
    );
}

export default Footer;