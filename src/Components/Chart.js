import React, { useContext } from "react";
import { Bar, Line } from "react-chartjs-2";
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

	const data1 = {
		labels: chartCatsName,
		datasets: [
			{
				label: "Amount",
				data: chartCatsAmount,
				backgroundColor: type === "Income" ? "rgb(212, 255, 221)" : "rgba(255, 99, 132, 0.2)",
				borderColor: type === "Income" ? "rgb(102, 255, 134)" : "rgb(255, 143, 143)",
				borderWidth: 1,
			},
		],
	};

	const options1 = {
		indexAxis: "y",

		elements: {
			bar: {
				borderWidth: 0,
			},
		},
		responsive: true,

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
	const data2 = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		datasets: [
			{
				label: "Expense",
				data: entries && entries.filter(ent => ent.type === "Expense").map(ent => ent.amount),
				lineTension: 0.5,
				fill: false,
				backgroundColor: "rgba(255, 99, 132, 0.2)",
				borderColor: "rgb(255, 143, 143)",
				borderWidth: 1,
			},
			{
				label: "Income",
				data: entries && entries.filter(ent => ent.type === "Income").map(ent => ent.amount),
				lineTension: 0.5,
				fill: false,
				backgroundColor: "rgb(184, 255, 199)",
				borderColor: "rgb(102, 255, 134)",
				borderWidth: 1,
			},
		],
	};
	const options2 = {};

	return type === "Income" || type === "Expense" ? (
		<Bar data={data1} options={options1} />
	) : (
		<Line data={data2} options={options2} />
	);
}
