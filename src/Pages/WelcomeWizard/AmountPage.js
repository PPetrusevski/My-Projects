import { Grid } from "@material-ui/core";
import { Link } from "@reach/router";
import React from "react";
import Controls from "../../Components/Controls/Controls";

export default function AmountPage() {
	return (
		<Grid item style={{ width: "80%" }}>
			Step 3: Choose Amount Page
			<Link to="/overview">
				<Controls.Button text="Complete" />
			</Link>
		</Grid>
	);
}
