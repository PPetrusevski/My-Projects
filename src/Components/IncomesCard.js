import {
	Icon,
	LinearProgress,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@material-ui/core";
import React, { useContext } from "react";
import { Context } from "../Context/Context";
import Controls from "./Controls/Controls";

export default function IncomesCard() {
	const { categories } = useContext(Context);
	const income = categories.filter(cat => cat.type === "Income");
	return (
		<Controls.Card title="Income">
			<List dense>
				{income.map((inc, idx) => {
					const entriesTotal = () => {
						let total = 0;
						inc.entries &&
							inc.entries.forEach(entry => {
								total += entry.amount;
							});
						return total;
					};

					const calculatePercentage = (num1, num2) => {
						if (!num1 || num1 === 0) return 0;
						return Math.round((num1 / num2) * 100);
					};

					return (
						<div key={inc.id + idx + inc.name}>
							<ListItem disableGutters>
								<ListItemIcon style={{ minWidth: "40px" }}>
									<Icon style={{ color: "black" }}>{inc.iconName}</Icon>
								</ListItemIcon>
								<ListItemText primary={inc.name} />
								<ListItemText
									primary={`${entriesTotal()}${inc.budget ? `/${inc.budget}` : ""}`}
									style={{ textAlign: "right" }}
								/>
							</ListItem>
							<LinearProgress
								variant="determinate"
								color="primary"
								value={calculatePercentage(entriesTotal(), inc.budget)}
							/>
						</div>
					);
				})}
			</List>
		</Controls.Card>
	);
}
