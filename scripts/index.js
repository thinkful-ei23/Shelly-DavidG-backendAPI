/* global shoppingList, cuid, api, $ */
'use strict';
// eslint-disable-next-line no-unused-vars

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

api.getItems(function(data) {
  console.log(data);
});

console.log(api.BASE_URL);