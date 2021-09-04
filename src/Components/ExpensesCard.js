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
});

export default function ExpensesCard() {
	const { categories } = useContext(Context);
	const classes = useStyles();
	const expenses = categories.filter(cat => cat.type === "Expense");
	return (
		<Controls.Card title="Expenses">
			<List dense>
				{expenses.map((exp, idx) => {
					return (
						<div key={exp.id + idx + exp.name}>
							<ListItem disableGutters>
								<ListItemIcon style={{ minWidth: "40px" }}>
									<Icon style={{ color: "black" }}>{exp.iconName}</Icon>
								</ListItemIcon>
								<ListItemText primary={exp.name} />
								<ListItemText primary="3000/4500" style={{ textAlign: "right" }} />
							</ListItem>
							<div className={classes.root}>
								<LinearProgress variant="determinate" color="secondary" value={50} />
							</div>
						</div>
					);
				})}
			</List>
		</Controls.Card>
	);
}
