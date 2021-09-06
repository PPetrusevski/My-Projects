import {
	Grid,
	InputAdornment,
	InputBase,
	makeStyles,
	TextField,
	Typography,
} from "@material-ui/core";
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
	buttonCont: {
		alignSelf: "flex-end",
		marginBottom: "20px",
		marginTop: "20px",
	},
}));

export default function AmountPage() {
	const { categories, setIsSignedIn } = useContext(Context);
	const classes = useStyles();

	const handleToggle = (e, cat) => {};

	const handleComplete = () => {
		setIsSignedIn(true);
		navigate("/main");
		// console.log(categories);
	};

	return (
		<>
			<Grid item xs={10}>
				<Grid item xs={12}>
					<Typography className={classes.heading} variant="h5" component="h2" align="center">
						WELCOME
					</Typography>
					<Typography className={classes.question} component="p" align="center">
						Set how much money you want to spend on each category monthly
					</Typography>
				</Grid>
				<Grid item xs={12}>
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
													// console.log(categories);
												}}
											/>
										}
									/>
								</ListItem>
							);
						})}
					</List>
				</Grid>
			</Grid>
			<Grid item xs={10} className={classes.buttonCont}>
				<Controls.Button text="Complete" onClick={handleComplete} />
			</Grid>
		</>
	);
}
