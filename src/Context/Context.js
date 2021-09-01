import { createContext, useState } from "react";
import Categories from "../Assets/categories";

export const Context = createContext();

export const Provider = ({ children }) => {
	const [categories, setCategories] = useState(Categories);

	const ContextObj = { categories, setCategories };
	return <Context.Provider value={ContextObj}>{children}</Context.Provider>;
};
