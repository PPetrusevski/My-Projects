import { Grid, InputAdornment, InputBase, TextField } from "@material-ui/core";
import { Link } from "@reach/router";
import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import Controls from "../../Components/Controls/Controls";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import Icon from "@material-ui/core/Icon";

export default function AmountPage() {
	const { categories } = useContext(Context);

	const handleToggle = (e, cat) => {};
	return (
		<Grid item style={{ width: "80%" }}>
			<List dense>
				{categories.map(cat => {
					return (
						<ListItem key={cat.id} divider={true} disableGutters>
							<ListItemIcon>
								<Icon style={{ color: "black" }}>{cat.iconName}</Icon>
							</ListItemIcon>
							<ListItemText primary={cat.name} />
							<InputAdornment
								position="end"
								children={
									<InputBase
										type="number"
										color="primary"
										style={{
											width: "100px",
											backgroundColor: "#ededed",
											marginLeft: "auto",
											textAlign: "end",
										}}
										value={cat.budget}
									/>
								}
							/>
						</ListItem>
					);
				})}
			</List>
			<Link to="/overview">
				<Controls.Button text="Complete" />
			</Link>
		</Grid>
	);
}
