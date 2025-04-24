import React from "react";
import { TodoList } from "./TodoList.jsx";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<TodoList/>
		</div>
	);
};

export default Home;