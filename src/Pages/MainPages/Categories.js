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
});
export default function Categories() {
	const classes = useStyles();
	const { categories } = useContext(Context);

	return (
		<Grid container justifyContent="center">
			<Grid item xs={10}>
				<Controls.Card title="Categories">
					<List dense>
						{categories.map((cat, idx) => {
							const isExpense = cat.type === "Expense" ? true : false;
							return (
								<div key={cat.id + idx + cat.name}>
									<ListItem
										disableGutters
										divider
										className={`${isExpense ? classes.expense : classes.income}`}
									>
										<ListItemIcon style={{ minWidth: "40px" }}>
											<Icon className={`${isExpense ? classes.expense : classes.income}`}>
												{cat.iconName}
											</Icon>
										</ListItemIcon>
										<ListItemText primary={cat.name} />
										<ListItemText
											disableTypography
											primary={<Typography variant="body2">{cat.budget}</Typography>}
											secondary={
												cat.budget > 0 && (
													<Typography style={{ fontSize: "8px", color: "black" }} variant="caption">
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
