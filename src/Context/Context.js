import { createContext, useState } from "react";
import Categories from "../Assets/categories";

export const Context = createContext();

export const Provider = ({ children }) => {
	const [categories, setCategories] = useState(Categories);
	const [budgetTotal, setBudgetTotal] = useState(0);

	console.log(budgetTotal);

	const ContextObj = { categories, setCategories, budgetTotal, setBudgetTotal };
	return <Context.Provider value={ContextObj}>{children}</Context.Provider>;
};
