import { createContext, useState } from "react";
import Categories from "../Assets/categories";
import Entries from "../Assets/entries";

export const Context = createContext();

export const Provider = ({ children }) => {
	const [categories, setCategories] = useState(Categories);
	const [activeCategories, setActiveCategories] = useState(Categories);
	const [entries, setEntries] = useState(Entries);
	const [budgetTotal, setBudgetTotal] = useState(0);
	const [isSignedIn, setIsSignedIn] = useState(true);
	const [userAvatar, setUserAvatar] = useState("");
	const [fabModalOpen, setFabModalOpen] = useState(false);
	const [entryModalOpen, setEntryModalOpen] = useState(false);
	const [newEntry, setNewEntry] = useState({});
	const [updatedEntry, setUpdatedEntry] = useState({});
	const [categoryModalOpen, setCategoryModalOpen] = useState(false);
	const [newCategory, setNewCategory] = useState({});
	const [updatedCategory, setUpdatedCategory] = useState({});

	const addNewEntry = newEntry => {
		setEntries([newEntry, ...entries]);
	};

	const updateEntry = entry => {
		const updatedEntries = entries.map(ent => {
			if (ent.id === entry.id) {
				return entry;
			} else {
				return ent;
			}
		});
		setEntries(updatedEntries);
	};

	const addNewCategory = newCategory => {
		setActiveCategories([newCategory, ...activeCategories]);
	};

	const updateCategory = category => {
		const updatedCats = activeCategories.map(cat => {
			if (cat.id === category.id) {
				return category;
			} else {
				return cat;
			}
		});
		setActiveCategories(updatedCats);
	};

	const ContextObj = {
		categories,
		setCategories,
		activeCategories,
		setActiveCategories,
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
		updatedEntry,
		setUpdatedEntry,
		addNewEntry,
		updateEntry,
		categoryModalOpen,
		setCategoryModalOpen,
		newCategory,
		setNewCategory,
		addNewCategory,
		updateCategory,
		updatedCategory,
		setUpdatedCategory,
	};
	// console.log("fromContext:", newEntry);
	return <Context.Provider value={ContextObj}>{children}</Context.Provider>;
};
