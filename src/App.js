import React, { useState } from "react";
import ThemeContext from "./Context/ThemeContext";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import AppTrial from "./trial/AppTrial";
import AppThemeSwitcher from "./ThemeSwitcherLCO/AppThemeSwitcher";
import AppThemeSwitcherGPT from "./ThemeSwitcherGPT/AppThemeSwitcherGPT";
import App_Context_Reducer from "./Context_Reducer/App_Context_Reducer";
import App_LocalStorage_UseEffect from "./LocalStorage_UseEffect/App_LocalStorage_UseEffect";
import "./App.css";

const App = () => {
	const themeHook = useState("light");
	return (
		<div>
			{/* <ThemeContext.Provider value={themeHook}>
				<div>
					<Header />
					<HeroSection />
					<AppTrial />
				</div>
			</ThemeContext.Provider> */}
			{/* <AppThemeSwitcher /> */}
			{/* <AppThemeSwitcherGPT/> */}
			{/* <App_Context_Reducer /> */}
			<App_LocalStorage_UseEffect />
		</div>
	);
};

export default App;
