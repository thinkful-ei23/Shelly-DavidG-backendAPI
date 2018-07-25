/* global shoppingList, cuid, api, $ */
'use strict';
// eslint-disable-next-line no-unused-vars

$(document).ready(function() {
	shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
});

