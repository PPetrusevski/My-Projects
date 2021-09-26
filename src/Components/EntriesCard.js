import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Icon,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Menu,
	MenuItem,
	Typography,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import { Context } from "../Context/Context";
import Controls from "./Controls/Controls";
import nextId from "react-id-generator";
import AlertPage from "./AlertPage";

const useStyles = makeStyles(theme => ({
	red: {
		color: "#c24242",
	},
	green: {
		color: "#3ea842",
	},
}));

export default function EntriesCard({ handleEntryModalOpen }) {
	const [contextMenu, setContextMenu] = useState(null);
	const [entToDelete, setEntToDelete] = useState({});
	const [deleteConfirmed, setDeleteConfirmed] = useState(false);
	const { entries, activeCategories, deleteEntry, confOpen, setConfOpen } = useContext(Context);

	const handleContextMenu = (event, ent) => {
		event.preventDefault();
		setContextMenu(
			contextMenu === null
				? {
						mouseX: event.clientX - 2,
						mouseY: event.clientY - 4,
				  }
				: null
		);
		setEntToDelete(ent);
	};
	const handleDelete = () => {
		deleteEntry(entToDelete);
		handleClose();
		handleClose2();
	};

	const openConfirm = () => {
		setConfOpen(true);
		handleClose();
	};

	const handleClose = () => {
		setContextMenu(null);
	};
	const handleClose2 = () => {
		setConfOpen(false);
	};
	const classes = useStyles();
	return (
		<Controls.Card title="Entries">
			<List dense style={{ paddingBottom: 0 }}>
				{entries.length ? (
					entries.map(ent => {
						const isIncome = ent.type === "Income";
						const whichCat = activeCategories.find(cat => cat.id === ent.categoryId);
						return (
							<div key={nextId()}>
								<ListItem
									disableGutters
									divider
									button
									onClick={event => {
										handleEntryModalOpen(event, ent);
									}}
									onContextMenu={event => handleContextMenu(event, ent)}
								>
									<ListItemIcon style={{ minWidth: "40px" }}>
										<Icon style={{ color: "black" }}>{whichCat.iconName}</Icon>
									</ListItemIcon>
									<ListItemText
										primary={
											<Typography variant="body2" style={{ lineHeight: "1" }}>
												{whichCat.name}
											</Typography>
										}
										secondary={
											<Typography
												variant="caption"
												color="textSecondary"
												style={{ fontSize: "10px" }}
											>
												{ent.date}
											</Typography>
										}
									/>
									<ListItemText
										primary={`${isIncome ? "+" : "-"}${ent.amount}`}
										style={{ textAlign: "right" }}
										className={isIncome ? classes.green : classes.red}
									/>
								</ListItem>
							</div>
						);
					})
				) : (
					<ListItem disableGutters>
						<AlertPage severity="info" text="No entries added yet" />
					</ListItem>
				)}
				<>
					<Menu
						open={contextMenu !== null}
						onClose={handleClose}
						elevation={2}
						anchorReference="anchorPosition"
						anchorPosition={
							contextMenu !== null
								? { top: contextMenu.mouseY, left: contextMenu.mouseX }
								: undefined
						}
					>
						<MenuItem dense onClick={handleClose}>
							Duplicate
						</MenuItem>
						<MenuItem dense onClick={handleClose}>
							Create New
						</MenuItem>
						<MenuItem dense style={{ color: "#c24242" }} onClick={openConfirm}>
							Delete
						</MenuItem>
					</Menu>
					<Dialog
						open={confOpen}
						onClose={handleClose2}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
					>
						<DialogTitle id="alert-dialog-title">
							<Typography variant="body1">Are you sure you want to delete entry?</Typography>
						</DialogTitle>
						<DialogActions>
							<Button
								onClick={() => {
									handleClose();
									handleClose2();
								}}
							>
								No
							</Button>
							<Button
								onClick={() => {
									handleDelete();
									handleClose2();
								}}
								style={{ color: "#c24242" }}
							>
								Yes
							</Button>
						</DialogActions>
					</Dialog>
				</>
			</List>
		</Controls.Card>
	);
}
