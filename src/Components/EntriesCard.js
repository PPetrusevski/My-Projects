import { Icon, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { Context } from "../Context/Context";
import Controls from "./Controls/Controls";

export default function EntriesCard() {
	const { categories } = useContext(Context);
	return (
		<Controls.Card title="Entries">
			<List dense style={{ paddingBottom: 0 }}>
				{categories ? (
					categories.map(cat => {
						return (
							cat.entries &&
							cat.entries.map((entry, idx) => {
								return (
									<div key={cat.id + entry.amount + idx}>
										<ListItem disableGutters divider>
											<ListItemIcon style={{ minWidth: "40px" }}>
												<Icon style={{ color: "black" }}>{cat.iconName}</Icon>
											</ListItemIcon>
											<ListItemText
												primary={
													<Typography variant="body2" style={{ lineHeight: "1" }}>
														{cat.name}
													</Typography>
												}
												secondary={
													<Typography
														variant="caption"
														color="textSecondary"
														style={{ fontSize: "10px" }}
													>
														{entry.date}
													</Typography>
												}
											/>
											<ListItemText primary={entry.amount} style={{ textAlign: "right" }} />
										</ListItem>
									</div>
								);
							})
						);
					})
				) : (
					<p>Nothing to show here</p>
				)}
			</List>
		</Controls.Card>
	);
}
