import {
	Dialog,
	DialogActions,
	DialogContent,
	FormControl,
	Grid,
	MenuItem,
	Select,
} from "@material-ui/core";
import React, { useState } from "react";
import Controls from "../../Components/Controls/Controls";

export default function Statistics() {
	const [open, setOpen] = useState(true);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Grid container>
			<Grid item xs={10}>
				<Dialog
					open={open}
					onClose={handleClose}
					handleClose={handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogContent style={{ width: "80vw" }}>
						<FormControl fullWidth>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={10}
								onChange={"handleChange"}
								variant="outlined"
								style={{ width: "100%" }}
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</DialogContent>
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
			</Grid>
		</Grid>
	);
}
