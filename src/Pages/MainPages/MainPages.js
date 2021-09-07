import React, { useState, useContext } from "react";
import { Context } from "../../Context/Context";
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
	overlay: {
		opacity: 0.25,
	},
}));

export default function MainPages() {
	const [onPage, setOnPage] = useState(0);
	const [fabModalOpen, setFabModalOpen] = useState(false);
	const { isSignedIn } = useContext(Context);

	const classes = useStyles();

	return isSignedIn ? (
		<Grid className={classes.root}>
			<Header onPage={onPage} />
			{onPage === 0 && <Overview overlay={fabModalOpen && classes.overlay} />}
			{onPage === 1 && <Categories overlay={fabModalOpen && classes.overlay} />}
			{onPage === 2 && <Statistics overlay={fabModalOpen && classes.overlay} />}
			<BottomNav
				onPage={onPage}
				setOnPage={setOnPage}
				fabModalOpen={fabModalOpen}
				setFabModalOpen={setFabModalOpen}
			/>
		</Grid>
	) : (
		"You have to sign in first"
	);
}
