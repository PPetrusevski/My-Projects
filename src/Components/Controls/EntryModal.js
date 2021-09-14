import React, { useState, useContext, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Controls from "./Controls";
import { FormControl, Grid, MenuItem, Select } from "@material-ui/core";
import { Context } from "../../Context/Context";

export default function EntryModal({ handleClose }) {
	const [catType, setCatType] = useState("Income");
	const [catName, setCatName] = useState("Sallary");

	const { categories } = useContext(Context);

	const whatCat = categories.filter(cat => cat.type === catType);

	return (
		<>
			<DialogTitle>Add new entry</DialogTitle>
			<DialogContent>
				<FormControl fullWidth size="small" style={{ marginTop: "8px", marginBottom: "8px" }}>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						onChange={e => setCatType(e.target.value)}
						value={catType}
						variant="outlined"
					>
						<MenuItem value="Income">Income</MenuItem>
						<MenuItem value="Expense">Expense</MenuItem>
					</Select>
				</FormControl>
				<FormControl fullWidth size="small" style={{ marginTop: "8px", marginBottom: "8px" }}>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={catName || whatCat[0].name}
						onChange={e => setCatName(e.target.value)}
						variant="outlined"
					>
						{whatCat.map(cat => {
							return <MenuItem value={cat.name}>{cat.name}</MenuItem>;
						})}
					</Select>
				</FormControl>
				<FormControl fullWidth>
					<Controls.Input label="Amount" variant="outlined" type="number" size="small" />
				</FormControl>
				<FormControl fullWidth>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
							disableToolbar
							size="small"
							inputVariant="outlined"
							format="dd.MM.yyyy"
							margin="normal"
							id="date-picker-inline"
							label="Date picker inline"
							value={new Date()}
							// onChange={asd}
							// KeyboardButtonProps={{
							// 	"aria-label": "change date",
							// }}
						/>
					</MuiPickersUtilsProvider>
				</FormControl>
				<FormControl fullWidth>
					<Controls.Input size="small" label="Description (optional)" />
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
		</>
	);
}
