import React, { useContext, useEffect, useState } from "react";
import LogoHeader from "../../Components/LogoHeader";
import IncomePage from "./IncomePage";
import AmountPage from "./AmountPage";
import CategoryPage from "./CategoryPage";
import { Grid, makeStyles } from "@material-ui/core";
import { Context } from "../../Context/Context";
import { navigate } from "@reach/router";

const useStyles = makeStyles(() => ({
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

	useEffect(() => {
		if (isSignedIn) {
			navigate("/main");
		}
	}, []);

	const classes = useStyles();

	return (
		<Grid
			container
			justifyContent="center"
			className={`${step === 2 ? classes.noList : classes.root} ${
				step === 3 && categories.length > 6 && classes.noList
			}`}
			style={{
				maxWidth: "600px",
				marginLeft: "auto",
				marginRight: "auto",
			}}
		>
			<Grid item>
				<LogoHeader />
			</Grid>
			{step === 1 && <IncomePage handleStep={setStep} setBudgetTotal={setBudgetTotal} />}
			{step === 2 && <CategoryPage handleStep={setStep} />}
			{step === 3 && <AmountPage />}
		</Grid>
	);
}
