import React, { useContext } from "react";
import { ThemeContext } from "./AppThemeSwitcherGPT";
import Theme from "./ThemeCSS";

const Box = () => {
	const theme = useContext(ThemeContext)[0];
	const currentTheme = Theme[theme];

	return (
		<div
			className="box"
			style={{
				width: 100,
				height: 100,
				border: "2px solid #000",
				backgroundColor: `${currentTheme.backgroundColor}`,
			}}
		>
			Box
		</div>
	);
};

export default Box;
