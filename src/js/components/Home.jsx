import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Inputs from "./inputs.jsx"
import List from "./list.jsx";

//create your first component
const Home = () => {

	const [tasks, setTasks] = useState ([])

	const addTask = (taskText) => {
		if (taskText.trim() === "")
			return; setTasks(...tasks, taskText)
	};

	const removeTask = (indexToRemove) => {
		const filtered = tasks.filter((_, index) => index !== indexToRemove);
		setTasks (filtered);
	};

	return (

		<div className="container">
			<h1>Lista de Tareas</h1>
			<Inputs onAdd={addTask} />
			<List tasks={tasks} onRemove={removeTask}/>

		</div>

	);
};

export default Home;