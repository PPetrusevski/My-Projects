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
import AlertPage from "./AlertPage";
import Controls from "./Controls/Controls";

export default function IncomesCard({ entriesTotal, calculatePercentage }) {
	const { activeCategories, entries } = useContext(Context);
	const income = activeCategories
		? activeCategories.filter(cat => cat.type === "Income" && cat.isEnabled === true)
		: null;

	return (
		<Controls.Card title="Income">
			<List dense>
				{income.length ? (
					income.map((inc, idx) => {
						const matchingEntries = entries.filter(ent => ent.categoryId === inc.id);
						// console.log("inside map", matchingEntries);
						return (
							<div key={inc.id + idx + inc.name}>
								<ListItem disableGutters>
									<ListItemIcon style={{ minWidth: "40px" }}>
										<Icon style={{ color: "black" }}>{inc.iconName}</Icon>
									</ListItemIcon>
									<ListItemText primary={inc.name} />
									<ListItemText
										primary={`${entriesTotal(matchingEntries)}${
											inc.budget ? `/${inc.budget}` : ""
										}`}
										style={{ textAlign: "right" }}
									/>
								</ListItem>
								<LinearProgress
									variant="determinate"
									color="primary"
									value={calculatePercentage(entriesTotal(matchingEntries), inc.budget)}
								/>
							</div>
						);
					})
				) : (
					<ListItem disableGutters>
						<AlertPage severity="info" text="No active income categories." />
					</ListItem>
				)}
			</List>
		</Controls.Card>
	);
}
