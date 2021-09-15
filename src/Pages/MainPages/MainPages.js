import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../Context/Context";
import Header from "../../Components/Header";
import BottomNav from "../../Components/BottomNav";
import { Dialog, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Overview from "./Overview";
import Categories from "./Categories";
import Statistics from "./Statistics";
import Controls from "../../Components/Controls/Controls";

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
	const [fabButtonClicked, setFabButtonClicked] = useState("");

	const { isSignedIn, fabModalOpen, setFabModalOpen, entryModalOpen, setEntryModalOpen } =
		useContext(Context);

	useEffect(() => {
		entryModalOpen && handleEntryModalClose();
		fabModalOpen && setFabModalOpen(false);
	}, [onPage]);

	const classes = useStyles();

	const handleEntryModalOpen = e => {
		fabModalOpen && setFabModalOpen(false);
		setEntryModalOpen(true);
		setFabButtonClicked(e.currentTarget.getAttribute("data-usage"));
		console.log(e.currentTarget.getAttribute("data-usage"));
	};
	const handleEntryModalClose = () => {
		setEntryModalOpen(false);
	};

	return isSignedIn ? (
		<Grid className={classes.root}>
			<Header onPage={onPage} />
			{onPage === 0 && <Overview overlay={(fabModalOpen || entryModalOpen) && classes.overlay} />}
			{onPage === 1 && <Categories overlay={(fabModalOpen || entryModalOpen) && classes.overlay} />}
			{onPage === 2 && <Statistics overlay={(fabModalOpen || entryModalOpen) && classes.overlay} />}
			<Grid item xs={10}>
				<form>
					<Dialog
						open={entryModalOpen}
						onClose={handleEntryModalClose}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
					>
						<Controls.EntryModal
							open={entryModalOpen}
							handleClose={handleEntryModalClose}
							fabButtonClicked={fabButtonClicked}
						/>
					</Dialog>
				</form>
			</Grid>
			<BottomNav
				onPage={onPage}
				setOnPage={setOnPage}
				fabModalOpen={fabModalOpen}
				setFabModalOpen={setFabModalOpen}
				handleEntryModalOpen={handleEntryModalOpen}
				setFabButtonClicked={setFabButtonClicked}
			/>
		</Grid>
	) : (
		"You have to sign in first"
	);
}
