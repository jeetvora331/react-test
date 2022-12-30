import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../AppTheme";

const HeroSection = () => {
	const theme = useContext(ThemeContext)[0];
	const currentTheme = AppTheme[theme];

	return (
		<div
			style={{
				backgroundColor: `${currentTheme.backgroundColor}`,
				color: `${currentTheme.textColor}`,
			}}
		>
			<h1>ContextAPI theme toggler</h1>
			<p>Lorem ipsum dolor sit amet.</p>
			<button style={{ backgroundColor: "#26ae60" }}>Click Me</button>
		</div>
	);
};

export default HeroSection;
