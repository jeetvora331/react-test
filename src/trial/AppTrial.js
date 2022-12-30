import React, { createContext } from "react";
import ChildA from "./ChildA";

const Context = createContext(); //Creating Context
//-------

const AppTrial = () => {
	const fName = "Jeet Vora";
	return (
		<div>
			AppTrial
			<Context.Provider value={fName}>
				<ChildA />
			</Context.Provider>
		</div>
	);
};

export default AppTrial;
export { Context }; //exporting context
