import { handleHttpErrors, makeOptions } from "./utils";
import configuration from "./settings";

const itemFacade = (function() {
	function createItem(name) {
		const options = makeOptions("POST", false, { name: name });
		return fetch(configuration.URL + "/api/item", options).then(
			handleHttpErrors
		);
	}

	function readItem(id) {
		const options = makeOptions("GET", true);
		const result = fetch(configuration.URL + "/api/item/" + id, options).then(
			handleHttpErrors
		);
		return result;
	}

	function readAllItems() {
		const result = fetch(URL + "/api/item/all", makeOptions("GET", false)).then(
			handleHttpErrors
		);
	}

	function updateItem(name) {
		const options = makeOptions("PUT", false, { name: name });
		return fetch(configuration.URL + "/api/item", options).then(
			handleHttpErrors
		);
	}

	function deleteItem(id) {
		const options = makeOptions("DELETE", false);
		const result = fetch(configuration.URL + "/api/item/" + id, options).then(
			handleHttpErrors
		);
		return result;
	}

	return {
		create: createItem,
		read: readItem,
		readAll: readAllItems,
		update: updateItem,
		delete: deleteItem
	};
})();

export default itemFacade;
