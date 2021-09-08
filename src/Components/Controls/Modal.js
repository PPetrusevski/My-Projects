import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Controls from "./Controls";

export default function Modal({ children }) {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				Open alert dialog
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogContent style={{ width: "80vw" }}>{children}</DialogContent>
				<DialogActions>
					<Controls.Button
						size="small"
						variant="text"
						text="cancel"
						onClick={handleClose}
						color="primary"
					/>

					<Controls.Button size="small" text="add" onClick={handleClose} color="primary" />
				</DialogActions>
			</Dialog>
		</div>
	);
}
