// for development:
//const URL = "http://localhost:8080/3rdSemExam";
// actual deployed backend:
const URL = "https://mutezone.site/HWExamFamilyMeal";

const configuration = (function() {
	return {
		URL: URL
	};
})();

export default configuration;

/*
  Add configuration constants
  Return them as objects
  import configuration from "./settings";
  Const URL = configuration.URL;
*/
