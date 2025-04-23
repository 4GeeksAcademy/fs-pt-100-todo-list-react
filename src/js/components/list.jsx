import React from "react";
import Delete from "./delete.jsx"

const List = () => {

    return (
            <ul>{tasks.length === 0 ? (<li> No hay tareas, Añadir tareas </li>):
                    (tasks.map((task, index) => (
                    <Delete key={index} text={task} onDelete={() => onRemove (index)} />
                    ))
                )}
            </ul>
        );
    };
            
export default List;