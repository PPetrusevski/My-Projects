import { createContext, useState } from "react";
import Categories from "../Assets/categories";
import Entries from "../Assets/entries";

export const Context = createContext();

export const Provider = ({ children }) => {
	const [categories, setCategories] = useState(Categories);
	const [entries, setEntries] = useState(Entries);
	const [budgetTotal, setBudgetTotal] = useState(0);
	const [isSignedIn, setIsSignedIn] = useState(true);
	const [userAvatar, setUserAvatar] = useState("");
	const [fabModalOpen, setFabModalOpen] = useState(false);
	const [entryModalOpen, setEntryModalOpen] = useState(false);
	const [newEntry, setNewEntry] = useState({});

	const addNewEntry = newEntry => {
		categories.find(cat => cat.name === newEntry.name).entries.push(newEntry);
		setCategories(categories);
	};

	const ContextObj = {
		categories,
		setCategories,
		entries,
		setEntries,
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
		addNewEntry,
	};
	console.log("fromContext:", categories);
	return <Context.Provider value={ContextObj}>{children}</Context.Provider>;
};
