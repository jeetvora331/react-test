import React, { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoContext } from "./Context/TodoContext";
import todoReducer from "./Context/reducer";
import TodoFrom from "./Components/TodoFrom";
import Todos from "./Components/Todos";
import TodoList from "./TodoList";

const App_Context_Reducer = () => {
	const [todos, dispatch] = useReducer(todoReducer, []);
	return (
		<div>
			{/* <TodoContext.Provider value={{ todos, dispatch }}>
				<Container>
					<h1>App_Context_Reducer</h1>
					<TodoFrom />
					<Todos />
				</Container>
			</TodoContext.Provider> */}
			<TodoList />
		</div>
	);
};

export default App_Context_Reducer;
