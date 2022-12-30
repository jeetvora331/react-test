import React, { useContext } from "react";
import { List, ListGroup, ListGroupItem } from "reactstrap";
import { TodoContext } from "../Context/TodoContext";

const Todos = () => {
	const { todos, dispatch } = useContext(TodoContext);
	return (
		<div>
			<ListGroup className="items">
				{todos.map((todo) => (
					<ListGroupItem
						key={todo.id}
						onClick={(e) => e.currentTarget.classList.toggle("completedTodo")}
					>
						{todo.todoString}
						<span
							className="float-end"
							onClick={() => {
								dispatch({
									type: "REMOVE_TODO",
									payload: todo.id,
								});
							}}
						>
							<button style={{ color: "red" }}>Delete</button>
						</span>
					</ListGroupItem>
				))}
			</ListGroup>
		</div>
	);
};

export default Todos;
