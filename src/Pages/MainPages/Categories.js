import {
	Grid,
	Icon,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Typography,
} from "@material-ui/core";

import React, { useContext } from "react";
import Controls from "../../Components/Controls/Controls";
import { Context } from "../../Context/Context";

const useStyles = makeStyles({
	expense: {
		color: "#c24242",
	},
	income: {
		color: "#3ea842",
	},
	smallText: {
		fontSize: "7px",
		color: "grey",
		fontWeight: "600",
	},
	list: {
		paddingBottom: 0,
	},
	listItem: {
		height: "50px",
	},
});
export default function Categories({ overlay, handleCategoryModalOpen }) {
	const classes = useStyles();

	const { activeCategories } = useContext(Context);

	return (
		<Grid container justifyContent="center" className={overlay || ""}>
			<Grid item xs={10}>
				<Controls.Card title="Categories">
					<List dense className={classes.list}>
						<ListItem
							button
							disableGutters
							divider
							className={classes.listItem}
							onClick={() => {
								handleCategoryModalOpen();
							}}
						>
							<ListItemIcon style={{ minWidth: "40px" }}>
								<Icon style={{ color: "black" }}>{"add"}</Icon>
							</ListItemIcon>
							<ListItemText primary="Add New Category" />
						</ListItem>
						{activeCategories.map((cat, idx) => {
							const isExpense = cat.type === "Expense" ? true : false;
							return (
								<div key={cat.id + idx + cat.name}>
									<ListItem
										disableGutters
										divider
										className={`${isExpense ? classes.expense : classes.income} ${
											classes.listItem
										}`}
									>
										<ListItemIcon style={{ minWidth: "40px" }}>
											<Icon className={`${isExpense ? classes.expense : classes.income}`}>
												{cat.iconName}
											</Icon>
										</ListItemIcon>
										<ListItemText primary={cat.name} />
										<ListItemText
											disableTypography
											primary={
												cat.budget > 0 ? (
													<Typography variant="body2" style={{ lineHeight: "1" }}>
														{cat.budget}
													</Typography>
												) : (
													<Typography variant="caption" className={classes.smallText}>
														{"NO BUDGET LIMIT"}
													</Typography>
												)
											}
											secondary={
												cat.budget > 0 && (
													<Typography className={classes.smallText} variant="caption">
														{isExpense ? "BUDGET" : "PLANNED"}
													</Typography>
												)
											}
											style={{ textAlign: "right" }}
										/>
									</ListItem>
								</div>
							);
						})}
					</List>
				</Controls.Card>
			</Grid>
		</Grid>
	);
}
