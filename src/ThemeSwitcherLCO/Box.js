import React, { useContext } from "react";
import { Context } from "./AppThemeSwitcher";
import Theme from "./ThemeCSS";

export const Box = () => {
	const fromContextTheme = useContext(Context)[0];
	const theme = Theme[fromContextTheme];
	return (
		<div
			className="box"
			style={{
				width: 100,
				height: 100,
				border: "2px solid #000",
				backgroundColor: `${theme.backgroundColor}`,
			}}
		>
			Box
		</div>
	);
};
