import React from "react";
import { Grid } from "@material-ui/core";
import logo from "../Assets/logo-text.png";

export default function LogoHeader() {
	return (
		<>
			<Grid item xs={3} />
			<Grid item xs={6}>
				<img src={logo} style={{ width: "100%", marginBottom: "10px" }} alt="" />
			</Grid>
			<Grid item xs={3} />
		</>
	);
}
