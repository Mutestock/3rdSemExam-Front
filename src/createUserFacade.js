import configuration from "./settings";
import { handleHttpErrors, makeOptions } from "./utils";

const URL = configuration.URL;

const userFacade = (function() {
	function createUser(user, pass) {
		const options = makeOptions("POST", false, {
			userName: user,
			userPass: pass
		});
		return fetch(URL + "/api/user", options).then(handleHttpErrors);
	}
	function readUser(id) {
		const options = makeOptions("GET", true);
		const result = fetch(configuration.URL + "/api/user/" + id, options).then(
			handleHttpErrors
		);
		return result;
	}

	function readAllUsers() {
		const result = fetch(URL + "/api/user/all", makeOptions("GET", false)).then(
			handleHttpErrors
		);
	}

	function updateUser(username, password) {
		const options = makeOptions("PUT", false, {
			userName: username,
			userPass: password
		});
		return fetch(configuration.URL + "/api/user", options).then(
			handleHttpErrors
		);
	}

	function deleteUser(id) {
		const options = makeOptions("DELETE", false);
		const result = fetch(configuration.URL + "/api/user/" + id, options).then(
			handleHttpErrors
		);
		return result;
	}

	return {
		create: createUser,
		read: readUser,
		readAll: readAllUsers,
		update: updateUser,
		delete: deleteUser
	};
})();

export default userFacade;
