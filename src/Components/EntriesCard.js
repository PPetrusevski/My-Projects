import {
	Icon,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { Context } from "../Context/Context";
import Controls from "./Controls/Controls";

const useStyles = makeStyles(theme => ({
	red: {
		color: "#c24242",
	},
	green: {
		color: "#3ea842",
	},
}));

export default function EntriesCard() {
	const { entries, categories } = useContext(Context);
	const classes = useStyles();
	return (
		<Controls.Card title="Entries">
			<List dense style={{ paddingBottom: 0 }}>
				{entries ? (
					entries.map((ent, idx) => {
						const isIncome = ent.type === "Income";
						const whichCat = categories.find(cat => cat.id === ent.categoryId);
						console.log(ent);
						return (
							<div key={ent.id + ent.amount + idx}>
								<ListItem disableGutters divider>
									<ListItemIcon style={{ minWidth: "40px" }}>
										<Icon style={{ color: "black" }}>{whichCat.iconName}</Icon>
									</ListItemIcon>
									<ListItemText
										primary={
											<Typography variant="body2" style={{ lineHeight: "1" }}>
												{whichCat.name}
											</Typography>
										}
										secondary={
											<Typography
												variant="caption"
												color="textSecondary"
												style={{ fontSize: "10px" }}
											>
												{ent.date}
											</Typography>
										}
									/>
									<ListItemText
										primary={`${isIncome ? "+" : "-"}${ent.amount}`}
										style={{ textAlign: "right" }}
										className={isIncome ? classes.green : classes.red}
									/>
								</ListItem>
							</div>
						);
					})
				) : (
					<p>Nothing to show here</p>
				)}
			</List>
		</Controls.Card>
	);
}
