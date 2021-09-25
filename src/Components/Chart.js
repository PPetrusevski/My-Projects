import { makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { Context } from "../Context/Context";

export default function Chart({ type }) {
	const { entries, activeCategories } = useContext(Context);

	const chartCats = activeCategories
		.filter(cat => cat.type === type)
		.map(cat => {
			let howMuch = 0;
			entries.forEach(ent => {
				if (ent.categoryId === cat.id) {
					howMuch += ent.amount;
				}
			});
			return {
				name: cat.name,
				id: cat.id,
				amount: howMuch,
			};
		});
	const chartCatsName = chartCats.map(cat => cat.name);
	const chartCatsAmount = chartCats.map(cat => cat.amount);

	const data = {
		labels: chartCatsName,
		datasets: [
			{
				label: "Amount",
				data: chartCatsAmount,
				backgroundColor: type === "Income" ? "rgb(212, 255, 221)" : "rgba(255, 99, 132, 0.2)",
				borderColor: type === "Income" ? "rgb(163, 255, 166)" : "rgb(255, 189, 189)",
				borderWidth: 1,
			},
		],
	};

	const options = {
		indexAxis: "y",

		elements: {
			bar: {
				borderWidth: 0,
			},
		},
		responsive: true,
		plugins: {
			legend: {
				// position: "right",
			},
		},
		scaleShowValues: true,
		scales: {
			y: {
				ticks: {
					font: {
						size: 10,
						autoSkip: false,
					},
				},
			},
			x: {
				ticks: {
					font: {
						size: 10,
					},
				},
			},
		},
	};
	const useStyles = makeStyles(theme => ({
		root: {
			paddingBottom: 0,
		},
	}));

	const classes = useStyles();

	return <Bar className={classes.root} data={data} options={options} />;
}
