import React from "react";
import { Grid } from "@material-ui/core";
import IncomesCard from "../../Components/IncomesCard";
import ExpensesCard from "../../Components/ExpensesCard";
import EntriesCard from "../../Components/EntriesCard";

export default function Overview({ overlay, handleEntryModalOpen }) {
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
			<Grid item xs={10}>
				<IncomesCard entriesTotal={entriesTotal} calculatePercentage={calculatePercentage} />
			</Grid>

			<Grid item xs={10}>
				<ExpensesCard entriesTotal={entriesTotal} calculatePercentage={calculatePercentage} />
			</Grid>

			<Grid item xs={10}>
				<EntriesCard handleEntryModalOpen={handleEntryModalOpen} />
			</Grid>
		</Grid>
	);
}
