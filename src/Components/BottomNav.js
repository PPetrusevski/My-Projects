import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import CategoryIcon from "@material-ui/icons/Category";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import { Fab, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.primary.main,
		position: "fixed",
		width: "100%",
		bottom: 0,
		left: 0,
		zIndex: "1111111",
	},
	nav: {
		backgroundColor: theme.palette.primary.main,
	},

	icons: {
		color: "white",
	},
	fabCont: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	fabBtn: {
		bottom: "50%",
	},
}));

export default function BottomNav({ onPage, setOnPage }) {
	const classes = useStyles();

	return (
		<Grid container className={classes.root}>
			<Grid item xs={9}>
				<BottomNavigation
					value={onPage}
					onChange={(_, newValue) => {
						setOnPage(newValue);
					}}
					className={classes.nav}
					showLabels
				>
					<BottomNavigationAction
						className={`${classes.icons}`}
						label="Overview"
						icon={<HomeIcon />}
					/>

					<BottomNavigationAction
						className={`${classes.icons}`}
						label="Categories"
						icon={<CategoryIcon />}
					/>

					<BottomNavigationAction
						className={`${classes.icons}`}
						label="Statistics"
						icon={<EqualizerIcon />}
					/>
				</BottomNavigation>
			</Grid>
			<Grid item xs={3} className={classes.fabCont}>
				<Fab className={classes.fabBtn} color="secondary" aria-label="add">
					<AddIcon />
				</Fab>
			</Grid>
		</Grid>
	);
}
