import React from "react";
import Alert from "@mui/material/Alert";
import { Grid } from "@material-ui/core";

export default function AlertPage({ text, severity, children }) {
	return (
		<Grid container justifyContent="center" alignItems="center">
			<Grid item>
				<Alert severity={severity}>{text}</Alert>
			</Grid>
			<Grid item style={{ marginTop: "20px" }}>
				{children}
			</Grid>
		</Grid>
	);
}
