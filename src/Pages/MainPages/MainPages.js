import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../Context/Context";
import Header from "../../Components/Header";
import BottomNav from "../../Components/BottomNav";
import { Dialog, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Overview from "./Overview";
import Categories from "./Categories";
import Statistics from "./Statistics";
import EntryModal from "./EntryModal";
import CategoryModal from "./CategoryModal";

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
	const [entryClicked, setEntryClicked] = useState("");

	const {
		categories,
		activeCategories,
		newEntry,
		isSignedIn,
		fabModalOpen,
		setFabModalOpen,
		entryModalOpen,
		setEntryModalOpen,
		addNewEntry,
		updateEntry,
		updatedEntry,
		categoryModalOpen,
		setCategoryModalOpen,
		addNewCategory,
		newCategory,
	} = useContext(Context);

	useEffect(() => {
		entryModalOpen && handleEntryModalClose();
		fabModalOpen && setFabModalOpen(false);
		categoryModalOpen && setCategoryModalOpen(false);
	}, [onPage]);

	const classes = useStyles();

	const handleEntryModalOpen = (event, ent) => {
		fabModalOpen && setFabModalOpen(false);
		setEntryModalOpen(true);
		if (event.currentTarget.hasAttribute("data-usage")) {
			setFabButtonClicked(event.currentTarget.getAttribute("data-usage"));
			setEntryClicked("");
		} else {
			setEntryClicked(ent);
		}
	};
	const handleEntryModalClose = () => {
		setEntryModalOpen(false);
	};

	const handleNewEntrySubmit = e => {
		e.preventDefault();
		if (!entryClicked) {
			addNewEntry(newEntry);
		} else {
			updateEntry(updatedEntry);
		}
	};
	const handleCategoryModalOpen = (event, ent) => {
		fabModalOpen && setFabModalOpen(false);
		entryModalOpen && setEntryModalOpen(false);
		setCategoryModalOpen(true);
	};
	const handleCategoryModalClose = () => {
		setCategoryModalOpen(false);
	};

	const handleCategorySubmit = e => {
		e.preventDefault();
		addNewCategory(newCategory);
	};

	return isSignedIn ? (
		<Grid className={classes.root}>
			<Header onPage={onPage} />
			{onPage === 0 && (
				<Overview
					overlay={(fabModalOpen || entryModalOpen) && classes.overlay}
					handleEntryModalOpen={handleEntryModalOpen}
				/>
			)}
			{onPage === 1 && (
				<Categories
					handleCategoryModalOpen={handleCategoryModalOpen}
					overlay={(fabModalOpen || entryModalOpen || categoryModalOpen) && classes.overlay}
				/>
			)}
			{onPage === 2 && <Statistics overlay={(fabModalOpen || entryModalOpen) && classes.overlay} />}
			<Grid item xs={10}>
				<Dialog
					open={entryModalOpen}
					onClose={handleEntryModalClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<form onSubmit={handleNewEntrySubmit}>
						<EntryModal
							open={entryModalOpen}
							handleClose={handleEntryModalClose}
							fabButtonClicked={fabButtonClicked}
							inUpdateMode={!!entryClicked}
							entryClicked={entryClicked}
							cats={activeCategories}
						/>
					</form>
				</Dialog>
			</Grid>
			<Grid item xs={10}>
				<Dialog
					open={categoryModalOpen}
					onClose={handleCategoryModalClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<form onSubmit={handleCategorySubmit}>
						<CategoryModal
							open={categoryModalOpen}
							handleClose={handleCategoryModalClose}
							inUpdateMode={!!entryClicked}
							entryClicked={entryClicked}
							cats={activeCategories}
						/>
					</form>
				</Dialog>
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
