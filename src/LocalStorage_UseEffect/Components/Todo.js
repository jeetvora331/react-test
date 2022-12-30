import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaRegTrashAlt } from "react-icons/fa";

const Todo = ({ todos, markComplete }) => {
	return (
		<div>
			<ListGroup className="mt-5 mt-b items">
				{todos.map((todo) => (
					<ListGroupItem key={todo.id}>
						{todo.todoString}
						<span
							className="float-right"
							style={{ color: "red" }}
							onClick={() => {
								markComplete(todo.id);
							}}
						>
							<FaRegTrashAlt />
						</span>
					</ListGroupItem>
				))}
			</ListGroup>
		</div>
	);
};

export default Todo;
