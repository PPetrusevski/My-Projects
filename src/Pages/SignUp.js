import React, { useState } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import LogoHeader from "../Components/LogoHeader";
import Controls from "../Components/Controls/Controls";
import { Link, navigate } from "@reach/router";

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

export default function SignUp() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordIsValid, setPasswordIsValid] = useState(true);
	const [usernameIsValid, setUsernameIsValid] = useState(true);
	const [passwordErrMsg, setPasswordErrMsg] = useState("");
	const [usernameErrMsg, setUsernameErrMsg] = useState("");
	const [visible, setVisible] = useState(false);

	const classes = useStyles();

	const validateUsername = user => {
		const mailReg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (user.length === 0) {
			setUsernameErrMsg("This is a required field");
		} else if (!mailReg.test(user)) {
			setUsernameErrMsg("Please enter a valid email address.");
		} else {
			setUsernameErrMsg("");
		}

		if (mailReg.test(user)) {
			return true;
		}
		return false;
	};

	const validatePassword = pass => {
		// const reg = /^(?=.*[!@#$%^&*])(?=.*[a-z]).{8,32}$/;
		const lengthReg = /^.{8,32}$/;
		const charReg = /[!@#$%^&*]/;

		if (pass.length === 0) {
			setPasswordErrMsg("This is a required field");
		} else if (!lengthReg.test(pass)) {
			setPasswordErrMsg("The password's length must be between 8 and 32 characters.");
		} else if (!charReg.test(pass)) {
			setPasswordErrMsg("The password must contain a special character.");
		} else {
			setPasswordErrMsg("");
		}

		if (lengthReg.test(pass) && charReg.test(pass)) {
			return true;
		}

		return false;
	};

	const handleSignUpSubmit = e => {
		e.preventDefault();
		validateUsername(username) ? setUsernameIsValid(true) : setUsernameIsValid(false);
		validatePassword(password) ? setPasswordIsValid(true) : setPasswordIsValid(false);
		if (validateUsername(username) && validatePassword(password)) {
			navigate("/welcome");
		}
	};

	return (
		<form onSubmit={handleSignUpSubmit}>
			<Grid container alignItems="center" style={{ height: "100vh" }}>
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
						<Controls.Input
							size="small"
							label="Username"
							value={username}
							error={!usernameIsValid}
							helperText={!usernameIsValid && usernameErrMsg}
							onChange={e => setUsername(e.target.value)}
						/>
					</Grid>
					<Grid item xs={10}>
						<Controls.Input
							size="small"
							label="Password"
							type={visible ? "text" : "password"}
							value={password}
							onChange={e => setPassword(e.target.value)}
							error={!passwordIsValid}
							helperText={!passwordIsValid && passwordErrMsg}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton onClick={() => setVisible(!visible)}>
											{visible ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
					</Grid>
					<Grid item xs={4} />
					<Grid item xs={4}>
						<Controls.Button className={classes.button} text="Sign Up" type="submit" />
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
							<Typography
								variant="caption"
								display="block"
								gutterBottom
								color="primary"
								align="center"
							>
								Sign in please!
							</Typography>
						</Link>
					</Grid>
					<Grid item xs={3} />
				</Grid>
			</Grid>
		</form>
	);
}
