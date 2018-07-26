/* global shoppingList, cuid, $, Item */
// eslint-disable-next-line no-unused-vars

const store = (function () {

	let items = [];
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

	const updateStore = function(id) {
		this.items = this.items.filter(item => item.id !== id);
	}

	const findAndDelete = function(id) {
		this.items = this.items.filter(item => item.id !== id);
    
	};

	const toggleCheckedFilter = function(id) {
		this.hideCheckedItems = !this.hideCheckedItems;
	};

	const setSearchTerm = function(val) {
		this.searchTerm = val;
	};

	return {items, hideCheckedItems, searchTerm, findById, addItem, findAndUpdate, findAndDelete, toggleCheckedFilter, setSearchTerm, updateStore};
}() );