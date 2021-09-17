import { createContext, useState } from "react";
import Categories from "../Assets/categories";

export const Context = createContext();

export const Provider = ({ children }) => {
	const [categories, setCategories] = useState(Categories);
	const [budgetTotal, setBudgetTotal] = useState(0);
	const [isSignedIn, setIsSignedIn] = useState(true);
	const [userAvatar, setUserAvatar] = useState("");
	const [fabModalOpen, setFabModalOpen] = useState(false);
	const [entryModalOpen, setEntryModalOpen] = useState(false);
	const [newEntry, setNewEntry] = useState({});

	const handleNewEntrySubmit = e => {
		e.preventDefault();
		setCategories(() => {
			categories.forEach(cat => {
				if (cat.name === newEntry.name) {
					cat.entries.push(newEntry);
				}
			});
			return categories;
		});
	};

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
		entryModalOpen,
		setEntryModalOpen,
		newEntry,
		setNewEntry,
	};
	console.log("fromContext:", categories);
	return <Context.Provider value={ContextObj}>{children}</Context.Provider>;
};
