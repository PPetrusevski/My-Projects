import React, { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import Controls from "../../Components/Controls/Controls";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles(theme => ({
	heading: {
		letterSpacing: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	question: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(3),
		fontSize: "12px",
	},
}));

export default function CategoryPage({ handleStep }) {
	const [chosenCategories, setchosenCategories] = useState([]);
	const { categories } = useContext(Context);

	const classes = useStyles();

	const handleToggle = (e, cat) => {
		if (e.target.checked) {
			setchosenCategories([...chosenCategories, cat]);
		} else {
			const deleteCat = chosenCategories.filter(c => c.id !== cat.id);
			setchosenCategories(deleteCat);
		}
	};

	console.log(chosenCategories);

	return (
		<>
			<Grid item xs={10}>
				<Grid item xs={12}>
					<Typography className={classes.heading} variant="h5" component="h2" align="center">
						WELCOME
					</Typography>
					<Typography className={classes.question} component="p" align="center">
						Choose what you spend money on
					</Typography>
				</Grid>
			</Grid>
			<Grid item style={{ width: "80%" }}>
				<Grid item>
					<List dense>
						{categories.map(cat => {
							return (
								<ListItem key={cat.id} divider={true} disableGutters>
									<ListItemIcon>
										<Icon style={{ color: "black" }}>{cat.iconName}</Icon>
									</ListItemIcon>
									<ListItemText primary={cat.name} />
									<ListItemSecondaryAction>
										<Checkbox edge="end" onChange={e => handleToggle(e, cat)} color="primary" />
									</ListItemSecondaryAction>
								</ListItem>
							);
						})}
					</List>
				</Grid>
				<Grid item>
					<Controls.Button
						style={{ width: "100%" }}
						text="Done"
						disabled={chosenCategories.length ? false : true}
						onClick={() => {
							handleStep(3);
						}}
					/>
				</Grid>
			</Grid>
		</>
	);
}
