import { Grid } from "@material-ui/core";
import React from "react";
import IncomesCard from "../../Components/IncomesCard";
import ExpensesCard from "../../Components/ExpensesCard";
import EntriesCard from "../../Components/EntriesCard";

export default function Overview() {
	return (
		<Grid container justifyContent="center">
			<Grid item xs={10}>
				<IncomesCard />
			</Grid>
			<Grid item xs={10}>
				<ExpensesCard />
			</Grid>
			<Grid item xs={10}>
				<EntriesCard />
			</Grid>
		</Grid>
	);
}
