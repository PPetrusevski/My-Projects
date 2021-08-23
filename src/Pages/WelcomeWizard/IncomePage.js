import { Grid } from "@material-ui/core";
import React from "react";
import Controls from "../../Components/Controls/Controls";

export default function IncomePage({ handleStep }) {
	return (
		<Grid item style={{ width: "80%" }}>
			Step 1:Income page
			<Controls.Button
				text="Add"
				onClick={() => {
					handleStep(2);
				}}
			/>
		</Grid>
	);
}
