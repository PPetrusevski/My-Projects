import React from "react";
import { Card as MuiCard, CardContent, Typography } from "@material-ui/core";

export default function Card(props) {
	return (
		<MuiCard raised style={{ marginTop: "10px", marginBottom: "10px" }}>
			<CardContent style={{ backgroundColor: "#F4F4F4" }}>
				<Typography color="textSecondary">{props.title}</Typography>
			</CardContent>
			<CardContent>{props.children}</CardContent>
		</MuiCard>
	);
}
