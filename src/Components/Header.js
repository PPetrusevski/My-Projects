import { Avatar, Grid, Typography, makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { Context } from "../Context/Context";
import logo from "../Assets/logo.png";

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.primary.main,
		padding: theme.spacing(1),
		position: "fixed",
		width: "100%",
		top: 0,
		left: 0,
		zIndex: "1111111",
	},
	heading: {
		marginLeft: theme.spacing(1),
		color: "white",
	},
	logo: {
		width: "100%",
		maxWidth: "70px",
	},
}));

export default function Header({ onPage }) {
	const { userAvatar, setIsSignedIn } = useContext(Context);
	const classes = useStyles();

	const headingTitle = () => {
		if (onPage === 0) {
			return "Overview";
		} else if (onPage === 1) {
			return "Categories";
		} else if (onPage === 2) {
			return "Statistics";
		}
	};

	return (
		<Grid container className={classes.root}>
			<Grid
				container
				alignItems="center"
				style={{ maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}
			>
				<Grid item xs={2}>
					<img src={logo} alt="" className={classes.logo} />
				</Grid>
				<Grid item xs={5}>
					<Typography className={classes.heading} variant="h6">
						{headingTitle()}
					</Typography>
				</Grid>
				<Grid item xs={2} style={{ marginLeft: "auto" }}>
					<Avatar
						alt="avatar"
						src={userAvatar}
						style={{ marginLeft: "auto" }}
						onContextMenu={() => {
							setIsSignedIn(false);
						}}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
}
