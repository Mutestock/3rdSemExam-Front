import { handleHttpErrors, makeOptions } from "./utils";
import configuration from "./settings";

var recipeURL = "http://46.101.217.16:4000/";
const recipeFacade = (function() {
	function readRecipe(id) {
		const options = makeOptions("GET", true);
		const result = fetch(recipeURL + id, options).then(handleHttpErrors);
		return result;
	}

	function readAllRecipes() {
		const options = makeOptions("GET", true);
		const result = fetch(
			configuration.URL + "/api/recipe/all",
			makeOptions("GET", false)
		).then(handleHttpErrors);
		console.log(result);
		return result;
	}
	return {
		read: readRecipe,
		readAll: readAllRecipes
	};
})();

export default recipeFacade;
