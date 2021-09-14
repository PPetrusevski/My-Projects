import { createContext, useState } from "react";
import Categories from "../Assets/categories";

export const Context = createContext();

export const Provider = ({ children }) => {
	const [categories, setCategories] = useState(Categories);
	const [budgetTotal, setBudgetTotal] = useState(0);
	const [isSignedIn, setIsSignedIn] = useState(true);
	const [userAvatar, setUserAvatar] = useState("");
	const [fabModalOpen, setFabModalOpen] = useState(false);
	const [catModalOpen, setCatModalOpen] = useState(false);

	const ContextObj = {
		categories,
		setCategories,
		budgetTotal,
		setBudgetTotal,
		isSignedIn,
		setIsSignedIn,
		userAvatar,
		setUserAvatar,
		fabModalOpen,
		setFabModalOpen,
		catModalOpen,
		setCatModalOpen,
	};
	return <Context.Provider value={ContextObj}>{children}</Context.Provider>;
};
