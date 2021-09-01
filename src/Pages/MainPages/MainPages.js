import React, { useState } from "react";
import Header from "../../Components/Header";
import BottomNav from "../../Components/BottomNav";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Overview from "./Overview";
import Categories from "./Categories";
import Statistics from "./Statistics";

const useStyles = makeStyles(theme => ({
	root: {
		position: "relative",
		paddingTop: "80px",
		paddingBottom: "80px",
	},
}));

export default function MainPages() {
	const [onPage, setOnPage] = useState(0);

	const classes = useStyles();

	return (
		<Grid className={classes.root}>
			<Header onPage={onPage} />
			{onPage === 0 && <Overview />}
			{onPage === 1 && <Categories />}
			{onPage === 2 && <Statistics />}
			<BottomNav onPage={onPage} setOnPage={setOnPage} />
		</Grid>
	);
}
