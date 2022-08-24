import React from 'react';

function AlertComponent(props) {
    return (
        <div className="alert alert-warning" role="alert">
            {props.text}
        </div>
    )
};
export default AlertComponent;