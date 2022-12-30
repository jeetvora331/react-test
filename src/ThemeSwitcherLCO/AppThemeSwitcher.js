import React, { createContext, useState } from "react";
import { Box } from "./Box";
import ToggleButton from "./ToggleButton";

const Context = createContext();

const AppThemeSwitcher = () => {
	const theme = useState("light");
	return (
		<div>
			<Context.Provider value={theme}>
				AppThemeSwitcher
				<ToggleButton />
				<Box />
			</Context.Provider>
		</div>
	);
};

export default AppThemeSwitcher;
export { Context };
