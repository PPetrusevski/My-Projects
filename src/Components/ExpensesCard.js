import {
	Icon,
	LinearProgress,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
} from "@material-ui/core";
import React, { useContext } from "react";
import { Context } from "../Context/Context";
import Controls from "./Controls/Controls";

const useStyles = makeStyles({
	root: {
		"& .MuiLinearProgress-colorPrimary": {
			backgroundColor: "#ffbdbd",
		},
		"& .MuiLinearProgress-barColorPrimary": {
			backgroundColor: "#c24242",
		},
		"& .MuiLinearProgress-colorSecondary": {
			backgroundColor: "#b5f5b6",
		},
		"& .MuiLinearProgress-barColorSecondary": {
			backgroundColor: "#3ea842",
		},
	},
	green: {
		color: "#3ea842",
	},
	red: {
		color: "#c24242",
	},
});

export default function ExpensesCard({ entriesTotal, calculatePercentage }) {
	const { activeCategories, entries } = useContext(Context);
	const classes = useStyles();
	const expenses = activeCategories ? activeCategories.filter(cat => cat.type === "Expense") : null;

	return (
		<Controls.Card title="Expenses">
			<List dense>
				{expenses.length ? (
					expenses.map((exp, idx) => {
						const matchingEntries = entries.filter(ent => ent.categoryId === exp.id);

						const budgetExceeded = entriesTotal(matchingEntries) > exp.budget;

						return (
							<div key={exp.id + idx + exp.name}>
								<ListItem disableGutters>
									<ListItemIcon style={{ minWidth: "40px" }}>
										<Icon className={budgetExceeded ? classes.red : classes.green}>
											{exp.iconName}
										</Icon>
									</ListItemIcon>
									<ListItemText primary={exp.name} />
									<ListItemText
										primary={`${entriesTotal(matchingEntries)}${
											exp.budget ? `/${exp.budget}` : ""
										}`}
										style={{ textAlign: "right" }}
									/>
								</ListItem>
								<div className={classes.root}>
									<LinearProgress
										variant="determinate"
										color={budgetExceeded ? "primary" : "secondary"}
										value={calculatePercentage(entriesTotal(matchingEntries), exp.budget)}
									/>
								</div>
							</div>
						);
					})
				) : (
					<ListItem disableGutters>
						<ListItemText primary="NO EXPENSES!" />
					</ListItem>
				)}
			</List>
		</Controls.Card>
	);
}
