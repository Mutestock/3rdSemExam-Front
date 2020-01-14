import { handleHttpErrors, makeOptions } from "./utils";
import configuration from "./settings";

const mealPlanFacade = (function() {
	function createMealPlan(recipeID, dayOfWeek) {
		const options = makeOptions("POST", false, {});
		return fetch(configuration.URL + "/api/mealplan", options).then(
			handleHttpErrors
		);
	}

	function readMealPlan(id) {
		const options = makeOptions("GET", true);
		const result = fetch(
			configuration.URL + "/api/mealplan/" + id,
			options
		).then(handleHttpErrors);
		return result;
	}

	function readAllMealPlans() {
		const result = fetch(
			configuration.URL + "/api/mealplan/all",
			makeOptions("GET", false)
		).then(handleHttpErrors);
	}

	function updateMealPlan() {
		const options = makeOptions("PUT", false, {});
		return fetch(configuration.URL + "/api/mealplan", options).then(
			handleHttpErrors
		);
	}

	function deleteMealPlan(id) {
		const options = makeOptions("DELETE", false);
		const result = fetch(
			configuration.URL + "/api/mealplan/" + id,
			options
		).then(handleHttpErrors);
		return result;
	}

	return {
		create: createMealPlan,
		read: readMealPlan,
		readAll: readAllMealPlans,
		update: updateMealPlan,
		delete: deleteMealPlan
	};
})();

export default mealPlanFacade;
