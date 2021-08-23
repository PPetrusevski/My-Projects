import { Grid, makeStyles, Typography } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import React from "react";
import LogoHeader from "../Components/LogoHeader";
import Controls from "../Components/Controls/Controls";
import { Link } from "@reach/router";

const useStyles = makeStyles(theme => ({
	heading: {
		letterSpacing: theme.spacing(1),
		marginBottom: theme.spacing(2),
	},
	button: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
	},
}));

export default function SignIn() {
	const classes = useStyles();

	return (
		<Grid container justifyContent="center">
			<LogoHeader />
			<Grid item xs={3} />
			<Grid item xs={6}>
				<Typography
					className={classes.heading}
					variant="h5"
					component="h2"
					align="center"
					type="submit"
				>
					SIGN UP
				</Typography>
			</Grid>
			<Grid item xs={3} />
			<Grid item xs={10}>
				<Controls.Input size="small" label="Username" />
			</Grid>
			<Grid item xs={10}>
				<Controls.Input
					size="small"
					label="Password"
					type="password"
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton>
									<Visibility />
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
			</Grid>
			<Grid item xs={4} />
			<Grid item xs={4}>
				<Controls.Button className={classes.button} text="Sign Up" />
			</Grid>
			<Grid item xs={4} />
			<Grid item xs={3} />

			<Grid item xs={6}>
				<Typography
					variant="caption"
					display="block"
					gutterBottom
					color="textSecondary"
					align="center"
				>
					Already have account?
				</Typography>
			</Grid>
			<Grid item xs={3} />
			<Grid item xs={3} />

			<Grid item xs={5}>
				<Link to="/">
					<Typography variant="caption" display="block" gutterBottom color="primary" align="center">
						Sign in please!
					</Typography>
				</Link>
			</Grid>
			<Grid item xs={3} />
		</Grid>
	);
}
