import {
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
import React, { useContext } from "react";
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
	const [contextMenu, setContextMenu] = React.useState(null);

	const handleContextMenu = event => {
		event.preventDefault();
		setContextMenu(
			contextMenu === null
				? {
						mouseX: event.clientX - 2,
						mouseY: event.clientY - 4,
				  }
				: // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
				  // Other native context menus might behave different.
				  // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
				  null
		);
	};

	const { entries, activeCategories } = useContext(Context);
	const handleClose = () => {
		setContextMenu(null);
	};
	const classes = useStyles();
	return (
		<Controls.Card title="Entries">
			<List dense style={{ paddingBottom: 0 }}>
				{entries.length ? (
					entries.map((ent, idx) => {
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
									onContextMenu={handleContextMenu}
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
									<MenuItem dense style={{ color: "#c24242" }} onClick={handleClose}>
										Delete
									</MenuItem>
								</Menu>
							</div>
						);
					})
				) : (
					<ListItem disableGutters>
						<AlertPage severity="info" text="No entries added yet" />
					</ListItem>
				)}
			</List>
		</Controls.Card>
	);
}
