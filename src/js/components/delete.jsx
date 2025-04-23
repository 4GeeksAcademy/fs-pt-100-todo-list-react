import React from "react";

const Delete = ({text, onDelete}) => {

    return (
        <li>
            {text}
            <button className="delete-btn" onClick={onDelete}>🗑️</button>
        </li>
    );
};

export default Delete;