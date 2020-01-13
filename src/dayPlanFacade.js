import { handleHttpErrors, makeOptions } from "./utils";
import configuration from "./settings";

const dayPlanFacade = (function() {
	function createDayPlan(recipeID, dayOfWeek) {
		const options = makeOptions("POST", false, {
			recipeID: recipeID,
			dayOfWeek: dayOfWeek
		});
		return fetch(configuration.URL + "/api/dayplan", options).then(
			handleHttpErrors
		);
	}

	function readDayPlan(id) {
		const options = makeOptions("GET", true);
		const result = fetch(
			configuration.URL + "/api/dayplan/" + id,
			options
		).then(handleHttpErrors);
		return result;
	}

	function readAllDayPlans() {
		const result = fetch(
			URL + "/api/dayplan/all",
			makeOptions("GET", false)
		).then(handleHttpErrors);
	}

	function updateDayPlan(recipeID, dayOfWeek) {
		const options = makeOptions("PUT", false, {
			recipeID: recipeID,
			dayOfWeek: dayOfWeek
		});
		return fetch(configuration.URL + "/api/dayplan", options).then(
			handleHttpErrors
		);
	}

	function deleteDayPlan(id) {
		const options = makeOptions("DELETE", false);
		const result = fetch(
			configuration.URL + "/api/dayplan/" + id,
			options
		).then(handleHttpErrors);
		return result;
	}

	return {
		create: createDayPlan,
		read: readDayPlan,
		readAll: readAllDayPlans,
		update: updateDayPlan,
		delete: deleteDayPlan
	};
})();

export default dayPlanFacade;
