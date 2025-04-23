import React, { useState } from "react";

const Inputs = (onAdd) => {

    const [inputValue, setInputValue] = useState ('');

    const handleInputChange = e => {
        setInputValue (e.target.value)
    }

    const handleKeyDown = e => {
        if (e.key === "ENTER") {
            onAdd (inputValue);
            setInputValue('');
        }
    }

    // Me queda la duda si es necesario añadir el evento e.preventDefault () para evitar que se recargue la página.

    return (
        <input type="text" placeholder="Añade una tarea y finaliza con ENTER" value={inputValue}
        onChange={handleInputChange} onKeyDown={handleKeyDown}/>
    );
};

export default Inputs;