import React, { useContext, useState } from "react";
import LogoHeader from "../../Components/LogoHeader";
import IncomePage from "./IncomePage";
import AmountPage from "./AmountPage";
import CategoryPage from "./CategoryPage";
import { Grid, makeStyles } from "@material-ui/core";
import { Context } from "../../Context/Context";

const useStyles = makeStyles(theme => ({
	root: {
		paddingTop: "20px",
		paddingBottom: "20px",
		height: "100vh",
	},
	noList: {
		paddingTop: "20px",
		paddingBottom: "20px",
		height: "auto",
	},
}));

export default function WelcomeWizard() {
	const [step, setStep] = useState(1);
	const { setBudgetTotal, categories, isSignedIn } = useContext(Context);

	const classes = useStyles();

	return isSignedIn ? (
		<Grid
			container
			justifyContent="center"
			className={`${step === 2 ? classes.noList : classes.root} ${
				step === 3 && categories.length > 6 && classes.noList
			}`}
		>
			<Grid item xs={12}>
				<LogoHeader style={{ height: "25vh" }} />
			</Grid>
			{step === 1 && <IncomePage handleStep={setStep} setBudgetTotal={setBudgetTotal} />}
			{step === 2 && <CategoryPage handleStep={setStep} />}
			{step === 3 && <AmountPage />}
		</Grid>
	) : (
		<p>You have to Sign in or sign up</p>
	);
}
