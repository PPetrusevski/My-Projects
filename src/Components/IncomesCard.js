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

export default function IncomesCard({ entriesTotal, calculatePercentage }) {
	const { categories } = useContext(Context);
	const income = categories.filter(cat => cat.type === "Income");
	return (
		<Controls.Card title="Income">
			<List dense>
				{income.map((inc, idx) => {
					return (
						<div key={inc.id + idx + inc.name}>
							<ListItem disableGutters>
								<ListItemIcon style={{ minWidth: "40px" }}>
									<Icon style={{ color: "black" }}>{inc.iconName}</Icon>
								</ListItemIcon>
								<ListItemText primary={inc.name} />
								<ListItemText
									primary={`${entriesTotal(inc.entries)}${inc.budget ? `/${inc.budget}` : ""}`}
									style={{ textAlign: "right" }}
								/>
							</ListItem>
							<LinearProgress
								variant="determinate"
								color="primary"
								value={calculatePercentage(entriesTotal(inc.entries), inc.budget)}
							/>
						</div>
					);
				})}
			</List>
		</Controls.Card>
	);
}
