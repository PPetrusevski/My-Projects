import React from "react";
import { Grid } from "@material-ui/core";
import logo from "../Assets/logo-text.png";

export default function LogoHeader() {
	return (
		<Grid container justifyContent="center">
			<Grid item xs={4}>
				<img src={logo} style={{ width: "100%", marginBottom: "50px" }} alt="logo" />
			</Grid>
		</Grid>
	);
}
