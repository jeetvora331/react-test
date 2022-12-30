import React, { useState, useEffect } from "react";
import TodoForm from "./Components/TodoForm";
import Todo from "./Components/Todo";

import "./App_LocalStorage_UseEffect.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

const App_LocalStorage_UseEffect = () => {
	const [todos, setTodos] = useState(
		JSON.parse(localStorage.getItem("todos")) || []
	);

	useEffect(() => {
		const localTodos = localStorage.getItem("todos");
		console.log({ localStorage });
		if (localTodos) {
			setTodos(JSON.parse(localTodos));
		}
	}, []);

	const addTodos = async (todo) => {
		setTodos([...todos, todo]);
	};

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const markComplete = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<div>
			<Container fluid>
				<h1>App_LocalStorage_UseEffect</h1>
				<Todo todos={todos} markComplete={markComplete} />
				<TodoForm addTodos={addTodos} />
			</Container>
		</div>
	);
};

export default App_LocalStorage_UseEffect;
