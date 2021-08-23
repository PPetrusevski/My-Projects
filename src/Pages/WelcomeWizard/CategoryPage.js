import { Grid } from "@material-ui/core";
import React from "react";
import Controls from "../../Components/Controls/Controls";

export default function CategoryPage({ handleStep }) {
	return (
		<Grid item style={{ width: "80%" }}>
			Step 2: Choose Categories
			<Controls.Button
				style={{ width: "100%" }}
				text="Done"
				onClick={() => {
					handleStep(3);
				}}
			/>
		</Grid>
	);
}
