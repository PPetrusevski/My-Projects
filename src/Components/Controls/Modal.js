import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Controls from "./Controls";
import { FormControl, Grid, MenuItem, Select } from "@material-ui/core";
import { Context } from "../../Context/Context";

export default function Modal() {
	const [open, setOpen] = useState(true);
	const { categories } = useContext(Context);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Grid container>
			<Grid item xs={10}>
				<form>
					<Dialog
						open={open}
						onClose={handleClose}
						handleClose={handleClose}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
					>
						<DialogTitle>Add new entry</DialogTitle>
						<DialogContent style={{ width: "80vw" }}>
							<FormControl fullWidth size="small" style={{ marginTop: "8px", marginBottom: "8px" }}>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									// onChange={}
									variant="outlined"
								>
									<MenuItem value={1}>Income</MenuItem>
									<MenuItem value={2}>Expense</MenuItem>
								</Select>
							</FormControl>
							<FormControl fullWidth size="small" style={{ marginTop: "8px", marginBottom: "8px" }}>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									// onChange={}
									variant="outlined"
								>
									{categories.map(cat => {
										return <MenuItem value={cat.name}>{cat.name}</MenuItem>;
									})}
								</Select>
							</FormControl>
							<FormControl fullWidth>
								<Controls.Input label="Amount" variant="outlined" type="number" size="small" />
							</FormControl>
							<FormControl fullWidth>
								<MuiPickersUtilsProvider utils={DateFnsUtils}>
									<DatePicker
										disableToolbar
										size="small"
										inputVariant="outlined"
										format="MM/dd/yyyy"
										margin="normal"
										id="date-picker-inline"
										label="Date picker inline"
										value={"09/12/2021"}
										// onChange={asd}
										KeyboardButtonProps={{
											"aria-label": "change date",
										}}
									/>
								</MuiPickersUtilsProvider>
							</FormControl>
							<FormControl fullWidth>
								<Controls.Input size="small" />
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
				</form>
			</Grid>
		</Grid>
	);
}
