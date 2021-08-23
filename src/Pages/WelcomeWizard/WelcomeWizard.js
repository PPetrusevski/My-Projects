import React, { useState } from "react";
import LogoHeader from "../../Components/LogoHeader";
import IncomePage from "./IncomePage";
import AmountPage from "./AmountPage";
import CategoryPage from "./CategoryPage";
import { Grid } from "@material-ui/core";

export default function WelcomeWizard() {
	const [step, setStep] = useState(1);

	return (
		<Grid container justifyContent="center">
			<LogoHeader />
			{step === 1 && <IncomePage handleStep={setStep} />}
			{step === 2 && <CategoryPage handleStep={setStep} />}
			{step === 3 && <AmountPage />}
		</Grid>
	);
}
