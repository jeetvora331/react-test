import React, { useState } from "react";

function TodoList() {
	const [todos, setTodos] = useState([
		{
			text: "Take out the trash",
			isCompleted: false,
		},
		{
			text: "Buy groceries",
			isCompleted: false,
		},
		{
			text: "Do laundry",
			isCompleted: false,
		},
	]);

	function handleTodoClick(index) {
		const newTodos = [...todos];
		newTodos[index].isCompleted = !newTodos[index].isCompleted;
		setTodos(newTodos);
	}

	return (
		<div className="todo-list">
			{todos.map((todo, index) => (
				<div
					className={`todo-item ${todo.isCompleted ? "completed" : ""}`}
					onClick={() => handleTodoClick(index)}
				>
					{todo.text}
				</div>
			))}
		</div>
	);
}

export default TodoList;
