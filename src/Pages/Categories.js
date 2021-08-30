import React, { useContext } from "react";
import { Context } from "../Context/Context";
export default function Categories() {
	const { test, setTest } = useContext(Context);
	return (
		<div>
			{test}
			<button onClick={() => setTest("Pavel")}>Change</button>
		</div>
	);
}
