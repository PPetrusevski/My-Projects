import { createContext, useState } from "react";
import Categories from "../Assets/categories";

export const Context = createContext();

export const Provider = ({ children }) => {
	const [categories, setCategories] = useState(Categories);
	const [budgetTotal, setBudgetTotal] = useState(0);
	const [isSignedIn, setIsSignedIn] = useState(true);

	console.log(budgetTotal);

	const ContextObj = {
		categories,
		setCategories,
		budgetTotal,
		setBudgetTotal,
		isSignedIn,
		setIsSignedIn,
	};
	return <Context.Provider value={ContextObj}>{children}</Context.Provider>;
};
