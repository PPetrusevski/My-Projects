import React, { useContext, useState } from "react";
import LogoHeader from "../../Components/LogoHeader";
import IncomePage from "./IncomePage";
import AmountPage from "./AmountPage";
import CategoryPage from "./CategoryPage";
import { Grid } from "@material-ui/core";
import { Context } from "../../Context/Context";

export default function WelcomeWizard() {
	const [step, setStep] = useState(1);
	const { setBudgetTotal } = useContext(Context);

	return (
		<Grid container justifyContent="center" style={{ height: "100vh" }}>
			<Grid item xs={12}>
				<LogoHeader style={{ height: "25vh" }} />
			</Grid>
			{step === 1 && <IncomePage handleStep={setStep} setBudgetTotal={setBudgetTotal} />}
			{step === 2 && <CategoryPage handleStep={setStep} />}
			{step === 3 && <AmountPage />}
		</Grid>
	);
}
