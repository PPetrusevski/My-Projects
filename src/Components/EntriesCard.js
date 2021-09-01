import { Icon, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { Context } from "../Context/Context";
import Controls from "./Controls/Controls";

export default function EntriesCard() {
	const { categories } = useContext(Context);
	return (
		<Controls.Card title="Entries">
			<List dense>
				{categories.map(cat => {
					return (
						<>
							<ListItem key={cat.id} disableGutters divider>
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
											31.08.2021
										</Typography>
									}
								/>
								<ListItemText primary="+3000" style={{ textAlign: "right" }} />
							</ListItem>
						</>
					);
				})}
			</List>
		</Controls.Card>
	);
}
