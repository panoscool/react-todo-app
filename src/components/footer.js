import React from 'react';

const Footer = (props) => {
    return (
        <div className="footer">
            All {props.notesLength} &nbsp;
            Completed 0 &nbsp;
            Incompleted 0
        </div>
    );
}

export default Footer;