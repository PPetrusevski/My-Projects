import { Grid, MenuItem, Select } from "@material-ui/core";
import React from "react";
import Controls from "../../Components/Controls/Controls";

export default function Statistics() {
	return (
		<Grid container>
			<Grid item xs={10}>
				<Controls.Modal>
					<Grid container justifyContent="center">
						<Grid item xs={10}>
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
						</Grid>
					</Grid>
				</Controls.Modal>
			</Grid>
		</Grid>
	);
}
