import React, { useState, useContext } from "react";
import { Context } from "./AppThemeSwitcher";

const ToggleButton = () => {
	const [theme, setTheme] = useContext(Context);
	return (
		<div>
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			>
				Click to toggle
				{/* {console.log(theme)} */}
			</button>
		</div>
	);
};

export default ToggleButton;
