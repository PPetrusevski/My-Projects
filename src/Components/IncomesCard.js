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
	return (
		<Controls.Card title="Income">
			<List dense>
				{categories.map(cat => {
					return (
						<>
							<ListItem key={cat.id} disableGutters>
								<ListItemIcon style={{ minWidth: "40px" }}>
									<Icon style={{ color: "black" }}>{cat.iconName}</Icon>
								</ListItemIcon>
								<ListItemText primary={cat.name} />
								<ListItemText primary="3000/4500" style={{ textAlign: "right" }} />
							</ListItem>

							<LinearProgress variant="determinate" color="primary" value={50} />
						</>
					);
				})}
			</List>
		</Controls.Card>
	);
}
