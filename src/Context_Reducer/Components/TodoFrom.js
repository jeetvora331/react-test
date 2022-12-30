import React, { useState, useContext } from "react";
import { Input, Button, Form, InputGroup, Alert } from "reactstrap";
import { v4 } from "uuid";
import { TodoContext } from "../Context/TodoContext";

const TodoFrom = () => {
	const [todoString, setTodoString] = useState("");
	const { dispatch } = useContext(TodoContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (todoString === "") {
			return alert("Please Enter TODOS");
		}
		const todo = {
			todoString,
			id: v4(),
		};

		dispatch({
			type: "ADD_TODO",
			payload: todo,
		});
		setTodoString("");
	};

	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<InputGroup>
					<Input
						type="text"
						// name="todo"
						// id="todo"
						placeholder="Your next Todo"
						value={todoString}
						onChange={(e) => setTodoString(e.target.value)}
					/>
					<Button color="warning">Add</Button>
				</InputGroup>
			</Form>
		</div>
	);
};
export default TodoFrom;
