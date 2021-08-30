import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Controls from "../../Components/Controls/Controls";

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
		marginBottom: "1rem",
	},
}));

export default function IncomePage({ handleStep }) {
	const classes = useStyles();
	return (
		<>
			<Grid item xs={10}>
				<Grid item xs={12}>
					<Typography className={classes.heading} variant="h5" component="h2" align="center">
						WELCOME
					</Typography>
					<Typography className={classes.question} component="p" align="center">
						How much money you have at the moment?
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Controls.Input label="Amount" variant="filled" type="number" size="small" />
				</Grid>
			</Grid>
			<Grid item xs={10} className={classes.buttonCont}>
				<Controls.Button
					text="Add"
					onClick={() => {
						handleStep(2);
					}}
				/>
			</Grid>
		</>
	);
}
