import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import { Grid } from "@material-ui/core";
import IncomesCard from "../../Components/IncomesCard";
import ExpensesCard from "../../Components/ExpensesCard";
import EntriesCard from "../../Components/EntriesCard";

export default function Overview({ overlay }) {
	const { categories } = useContext(Context);

	const hasIncomes = categories.some(cat => cat.type === "Income");
	const hasExpenses = categories.some(cat => cat.type === "Expense");
	const hasEntries = categories.some(cat => cat.entries.length > 0);

	return (
		<Grid container justifyContent="center" className={overlay || ""}>
			{hasIncomes && (
				<Grid item xs={10}>
					<IncomesCard />
				</Grid>
			)}
			{hasExpenses && (
				<Grid item xs={10}>
					<ExpensesCard />
				</Grid>
			)}
			{hasEntries && (
				<Grid item xs={10}>
					<EntriesCard />
				</Grid>
			)}
		</Grid>
	);
}
