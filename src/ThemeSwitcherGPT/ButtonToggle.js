import React, { useState, useContext } from "react";
import { ThemeContext } from "./AppThemeSwitcherGPT";

const ButtonToggle = () => {
	const [theme, setTheme] = useContext(ThemeContext);
	console.log(theme);
	return (
		<button
			className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
		>
			Click to toggle
			{/* {console.log(theme)} */}
		</button>
	);
};

export default ButtonToggle;
