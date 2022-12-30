import React, { useContext } from "react";
import { Context } from "./AppTrial";

const ChildA = () => {
	const fName = useContext(Context); // Fetching Context 
	return (
		<div>
			<h3>from ChildA</h3>
			<p>the name of child is {fName}</p>
		</div>
	);
};

export default ChildA;
    