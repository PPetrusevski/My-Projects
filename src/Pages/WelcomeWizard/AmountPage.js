import { Grid, InputAdornment, InputBase, TextField } from "@material-ui/core";
import { Link, navigate } from "@reach/router";
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
	const { categories, setIsSignedIn } = useContext(Context);

	const handleToggle = (e, cat) => {};

	const handleComplete = () => {
		setIsSignedIn(true);
		navigate("/main");
		console.log(categories);
	};

	return (
		<Grid item xs={10}>
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
										onChange={e => {
											cat.budget = 0 || +e.target.value;
											console.log(categories);
										}}
									/>
								}
							/>
						</ListItem>
					);
				})}
			</List>
			<Controls.Button text="Complete" onClick={handleComplete} />
		</Grid>
	);
}
