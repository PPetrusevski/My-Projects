import React, { useState, useContext, useEffect } from "react";
import nextId from "react-id-generator";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Controls from "../../Components/Controls/Controls";
import Icons from "../../Assets/icons";
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	Icon,
	InputAdornment,
	InputLabel,
	makeStyles,
	MenuItem,
	Select,
} from "@material-ui/core";
import { Context } from "../../Context/Context";

export default function CategoryModal({ handleClose, cats, inUpdateMode, categoryClicked }) {
	//VALUES
	const [catType, setCatType] = useState(inUpdateMode ? categoryClicked.type : "Income");
	const [catName, setCatName] = useState(inUpdateMode ? categoryClicked.name : "");
	const [icon, setIcon] = useState(inUpdateMode ? categoryClicked.iconName : Icons[0]);
	const [budget, setBudget] = useState(inUpdateMode ? categoryClicked.budget : "");
	const [enabled, setEnabled] = useState(inUpdateMode ? categoryClicked.isEnabled : true);
	// const [catInputValid, setCatInputValid] = useState(true);
	// const [amountInputValid, setAmountInputValid] = useState(true);
	const [btnType, setBtnType] = useState("button");

	//VALIDATION

	// const validateInputs = () => {
	// 	if (!catName || !amount || amount < 1) {
	// 		if (!catName) {
	// 			setCatInputValid(false);
	// 		}
	// 		if (!amount || amount < 1) {
	// 			setAmountInputValid(false);
	// 		}
	// 		return false;
	// 	}
	// 	return true;
	// };

	const { setNewCategory, setUpdatedCategory } = useContext(Context);

	// const catId = _name => {
	// 	return cats.find(cat => cat.name === _name).id;
	// };
	// const whatCat = cats.filter(cat => cat.type === catType);

	const handleNewEntry = () => {
		setBtnType("submit");
		if (!inUpdateMode) {
			setNewCategory({
				id: nextId(),
				name: catName,
				type: catType,
				budget: budget,
				iconName: icon,
				isEnabled: enabled,
			});
		} else {
			setUpdatedCategory({
				id: categoryClicked.id,
				name: catName,
				type: catType,
				budget: budget,
				iconName: icon,
				isEnabled: enabled,
			});
		}
		handleClose();
		// if (validateInputs()) {
		// 	setBtnType("submit");
		// 	if (!inUpdateMode) {
		// 		setNewEntry({
		// 			id: nextId(),
		// 			type: catType,
		// 			categoryId: cats.find(cat => cat.name === catName).id,
		// 			amount,
		// 			date: date.toLocaleDateString("mk-MK"),
		// 			description: desc,
		// 		});
		// 	} else {
		// 		setUpdatedEntry({
		// 			id: entryClicked.id,
		// 			type: catType,
		// 			categoryId: cats.find(cat => cat.name === catName).id,
		// 			amount,
		// 			date: date.toLocaleDateString("mk-MK"),
		// 			description: desc,
		// 		});
		// 	}
		// 	handleClose();
		// }
	};

	const useStyles = makeStyles(theme => ({
		root: {
			"& label.Mui-focused": {
				color: theme.palette.primary.main,
			},
			"& .MuiOutlinedInput-root": {
				"&.Mui-focused fieldset": {
					borderColor: theme.palette.primary.main,
				},
			},
		},
	}));
	// console.log(catType);
	// console.log(catName);
	const classes = useStyles();
	return (
		<>
			<DialogTitle>{inUpdateMode ? "Update category" : "Add new category"}</DialogTitle>
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
					<Controls.Input
						label="Name"
						value={catName}
						onChange={e => {
							setCatName(e.target.value);
						}}
						variant="outlined"
						size="small"
						// error={!amountInputValid}
					/>
				</FormControl>
				<FormControl fullWidth size="small" style={{ marginTop: "8px", marginBottom: "8px" }}>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={icon || "Icon"}
						onChange={e => setIcon(e.target.value)}
						variant="outlined"
					>
						{Icons.map(icon => {
							return (
								<MenuItem key={nextId()} value={icon}>
									<Icon>{icon}</Icon>
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>
				<FormControl fullWidth>
					<Controls.Input
						label="Budget"
						value={budget}
						onChange={e => {
							setBudget(+e.target.value);
						}}
						variant="outlined"
						type="number"
						size="small"
						// error={!amountInputValid}
					/>
				</FormControl>
				<FormControl fullWidth variant="filled">
					<Controls.Input
						label="Enabled"
						disabled
						size="small"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<Checkbox
										color="primary"
										onChange={() => setEnabled(!enabled)}
										checked={enabled}
									/>
								</InputAdornment>
							),
						}}
					/>
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

				<Controls.Button
					size="small"
					text={inUpdateMode ? "update" : "add"}
					type={btnType}
					onClick={handleNewEntry}
					color="primary"
				/>
			</DialogActions>
		</>
	);
}
