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
					return (
						<div key={inc.id + idx + inc.name}>
							<ListItem disableGutters>
								<ListItemIcon style={{ minWidth: "40px" }}>
									<Icon style={{ color: "black" }}>{inc.iconName}</Icon>
								</ListItemIcon>
								<ListItemText primary={inc.name} />
								<ListItemText primary="3000/4500" style={{ textAlign: "right" }} />
							</ListItem>
							<LinearProgress variant="determinate" color="primary" value={50} />
						</div>
					);
				})}
			</List>
		</Controls.Card>
	);
}
