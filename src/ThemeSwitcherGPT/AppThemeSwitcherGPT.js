import React, { useState } from "react";
import Box from "./Box";
import ButtonToggle from "./ButtonToggle";

export const ThemeContext = React.createContext();

const AppThemeSwitcherGPT = () => {
	const theme = useState("light");
	return (
		<div>
			<ThemeContext.Provider value={theme}>
				AppThemeSwitcherGPT
				<ButtonToggle />
				<Box />
			</ThemeContext.Provider>
		</div>
	);
};


export default AppThemeSwitcherGPT;
