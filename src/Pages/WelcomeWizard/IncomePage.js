import { Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
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

export default function IncomePage({ handleStep, setBudgetTotal }) {
	const [budget, setBudget] = useState("");
	const [inputValid, setInputValid] = useState(true);

	const classes = useStyles();

	const handleSetBudgetTotal = () => {
		if (budget > 0) {
			setBudgetTotal(+budget);
			handleStep(2);
		} else {
			setInputValid(false);
		}
	};

	useEffect(() => {}, [budget]);

	return (
		<>
			<Grid item xs={10}>
				<Grid item xs={12}>
					<Typography className={classes.heading} variant="h5" component="h2" align="center">
						WELCOME
					</Typography>
					<Typography className={classes.question} component="p" align="center">
						How much money do you have at the moment?
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Controls.Input
						label="Amount"
						variant="filled"
						type="number"
						error={!inputValid}
						helperText={!inputValid && "The amount is required and must be greater than zero."}
						size="small"
						value={budget}
						onChange={e => {
							setBudget(e.target.value);
						}}
					/>
				</Grid>
			</Grid>
			<Grid item xs={10} className={classes.buttonCont}>
				<Controls.Button text="Add" onClick={handleSetBudgetTotal} />
			</Grid>
		</>
	);
}
