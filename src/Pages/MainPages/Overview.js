import {
	Grid,
	Icon,
	LinearProgress,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
} from "@material-ui/core";
import React, { useContext } from "react";
import Controls from "../../Components/Controls/Controls";
import { Context } from "../../Context/Context";

const useStyles = makeStyles({
	root: {
		"& .MuiLinearProgress-colorPrimary": {
			backgroundColor: "#ffbdbd",
		},
		"& .MuiLinearProgress-barColorPrimary": {
			backgroundColor: "#c24242",
		},
		"& .MuiLinearProgress-colorSecondary": {
			backgroundColor: "#b5f5b6",
		},
		"& .MuiLinearProgress-barColorSecondary": {
			backgroundColor: "#3ea842",
		},
	},
});

export default function Overview() {
	const { categories } = useContext(Context);
	const classes = useStyles();
	return (
		<Grid container justifyContent="center" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
			<Grid item xs={10}>
				<Controls.Card title="Income">
					<List dense>
						{categories.map(cat => {
							return (
								<>
									<ListItem key={cat.id} disableGutters>
										<ListItemIcon style={{ minWidth: "40px" }}>
											<Icon style={{ color: "black" }}>{cat.iconName}</Icon>
										</ListItemIcon>
										<ListItemText primary={cat.name} />
										<ListItemText primary="3000/4500" style={{ textAlign: "right" }} />
									</ListItem>
									<div className={classes.root}>
										<LinearProgress variant="determinate" color="secondary" value={50} />
									</div>
								</>
							);
						})}
					</List>
				</Controls.Card>
			</Grid>
			<Grid item xs={10}>
				<Controls.Card title="Expenses">
					<List dense>
						{categories.map(cat => {
							return (
								<>
									<ListItem key={cat.id} disableGutters>
										<ListItemIcon>
											<Icon style={{ color: "black" }}>{cat.iconName}</Icon>
										</ListItemIcon>
										<ListItemText primary={cat.name} />
									</ListItem>
									<div className={classes.root}>
										<LinearProgress variant="determinate" color="primary" value={50} />
									</div>
								</>
							);
						})}
					</List>
				</Controls.Card>
			</Grid>
		</Grid>
	);
}
