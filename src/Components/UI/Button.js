import React from "react";
import { Button as MuiButton } from "@material-ui/core";

const Button = props => {
	const { text, size, color, variant, onClick, ...other } = props;

	return (
		<MuiButton
			onClick={onClick}
			color={color || "primary"}
			variant={variant || "contained"}
			size={size || "large"}
			{...other}
		>
			{text}
		</MuiButton>
	);
};

export default Button;
