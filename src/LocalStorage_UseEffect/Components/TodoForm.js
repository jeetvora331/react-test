import React, { useState } from "react";
import { FormGroup, Form, Input, InputGroup, Button } from "reactstrap";
import { v4 } from "uuid";

const TodoForm = ({ addTodos }) => {
	//Passing Method as prop
	const [todoString, setTodoString] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (todoString === "") {
			return alert("Enter TODO First");
		}
		const todo = {
			todoString,
			id: v4(),
		};

		addTodos(todo);
		setTodoString("");
	};

	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<InputGroup>
					<Input
						type="text"
						name="todo"
						id="todo"
						placeholder="Enter TODO here"
						value={todoString}
						onChange={(e) => {
							setTodoString(e.currentTarget.value);
						}}
					></Input>
					<Button color="success">Add Todo</Button>
				</InputGroup>
			</Form>
		</div>
	);
};

export default TodoForm;
