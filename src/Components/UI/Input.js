import React from "react";
import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		margin: theme.spacing(1),
	},
}));

const Input = props => {
	const { name, label, value, color, onChange } = props;
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
		/>
	);
};

export default Input;
