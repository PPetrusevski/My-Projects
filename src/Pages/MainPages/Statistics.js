import { Grid } from "@material-ui/core";
import Chart from "../../Components/Chart";
import React from "react";
import Controls from "../../Components/Controls/Controls";

export default function Statistics() {
	return (
		<Grid container justifyContent="center">
			<Grid item xs={11}>
				<Controls.Card title="Income">
					<Chart type="Income" />
				</Controls.Card>
			</Grid>
			<Grid item xs={11}>
				<Controls.Card title="Expense">
					<Chart type="Expense" />
				</Controls.Card>
			</Grid>
			<Grid item xs={11}>
				<Controls.Card title="Expense and Income">
					<Chart type="Multi" />
				</Controls.Card>
			</Grid>
		</Grid>
	);
}
