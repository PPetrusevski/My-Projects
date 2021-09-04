const Categories = [
	{
		id: 1,
		name: "Sallary",
		type: "Income",
		budget: 30000,
		iconName: "euro",
		isEnabled: true,
		entries: [{ date: "13.05.21", amount: 1000 }],
	},
	{
		id: 2,
		name: "Rent",
		type: "Expense",
		budget: 12000,
		iconName: "home",
		isEnabled: false,
		entries: [
			{ date: "20.06.21", amount: 1000 },
			{ date: "25.09.21", amount: 24000 },
		],
	},
	{
		id: 3,
		name: "Food",
		type: "Expense",
		budget: 0,
		iconName: "fastfood",
		isEnabled: true,
		entries: [{ date: "13.05.21", amount: 1000 }],
	},
	{
		id: 4,
		name: "Gym",
		type: "Income",
		budget: 9000,
		iconName: "fitness_center",
		isEnabled: true,
		entries: [{ date: "20.06.21", amount: 1000 }],
	},
	{
		id: 5,
		name: "Bills",
		type: "Expense",
		budget: 9000,
		iconName: "description",
		isEnabled: true,
		entries: [{ date: "13.05.21", amount: 1000 }],
	},
	{
		id: 6,
		name: "Leisure",
		type: "Income",
		budget: 9000,
		iconName: "beach_access",
		isEnabled: true,
		entries: [{ date: "13.05.21", amount: 1000 }],
	},
	{
		id: 7,
		name: "Renovating",
		type: "Expense",
		budget: 9000,
		iconName: "build",
		isEnabled: true,
		entries: [{ date: "20.06.21", amount: 1000 }],
	},
];

export default Categories;
