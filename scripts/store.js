/* global shoppingList, cuid, $, Item */
// eslint-disable-next-line no-unused-vars

const store = (function () {

	let items = [
		{ id: cuid(), name: 'apples', checked: false },
		{ id: cuid(), name: 'oranges', checked: false },
		{ id: cuid(), name: 'milk', checked: true },
		{ id: cuid(), name: 'bread', checked: false }
	];
	let hideCheckedItems = false;
	let searchTerm = '';
    
	const findById = function(id) {
		return store.items.find(item => item.id === id);
	};

	const addItem = function(item) {
		this.items.push(item);
	};

	const findAndUpdate = function(id, newData) {
		let newFoundItem = this.items.find(item => item.id = id);
		Object.assign(newFoundItem, newData);
	};

	const findAndDelete = function(id) {
		let foundItem = this.findById(id);
		store.items = store.items.filter(item => item !== foundItem);
	};

	const toggleCheckedFilter = function(id) {
		this.hideCheckedItems = !this.hideCheckedItems;
	};

	const setSearchTerm = function(val) {
		this.searchTerm = val;
	};

	return {items, hideCheckedItems, searchTerm, findById, addItem, findAndUpdate, findAndDelete, toggleCheckedFilter, setSearchTerm};
}() );