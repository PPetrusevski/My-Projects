import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import { Grid } from "@material-ui/core";
import IncomesCard from "../../Components/IncomesCard";
import ExpensesCard from "../../Components/ExpensesCard";
import EntriesCard from "../../Components/EntriesCard";

export default function Overview({ overlay }) {
	const { categories, entries } = useContext(Context);

	const hasIncomes = categories.some(cat => cat.type === "Income");
	const hasExpenses = categories.some(cat => cat.type === "Expense");
	const hasEntries = entries.length > 0;

	const entriesTotal = entry => {
		let total = 0;
		entry &&
			entry.forEach(ent => {
				total += ent.amount;
			});
		return total;
	};

	const calculatePercentage = (num1, num2) => {
		if (!num1 || num1 === 0) {
			return 0;
		} else if (num1 > num2) {
			return 100;
		}
		return Math.round((num1 / num2) * 100);
	};

	return (
		<Grid container justifyContent="center" className={overlay || ""}>
			{hasIncomes && (
				<Grid item xs={10}>
					<IncomesCard entriesTotal={entriesTotal} calculatePercentage={calculatePercentage} />
				</Grid>
			)}
			{hasExpenses && (
				<Grid item xs={10}>
					<ExpensesCard entriesTotal={entriesTotal} calculatePercentage={calculatePercentage} />
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
