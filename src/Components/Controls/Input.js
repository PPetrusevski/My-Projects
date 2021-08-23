import React from "react";
import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
		width: "100%",
	},
}));

const Input = props => {
	const { name, label, value, color, onChange, ...other } = props;
	const classes = useStyles();
	return (
		<TextField
			name={name}
			type={props.type || "text"}
			onChange={onChange}
			color={color || "primary"}
			variant="outlined"
			label={label}
			value={value}
			className={classes.root}
			{...other}
		/>
	);
};

export default Input;
