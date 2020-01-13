import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import loginFacade from "./loginFacade";
import itemFacade from "./itemFacade";
import mealPlanFacade from "./mealPlanFacade";
import dayPlanFacade from "./dayPlanFacade";
import starFacade from "./starFacade";
import createUserFacade from "./createUserFacade";
import "bootstrap/dist/css/bootstrap.min.css";

const AppFacadeTime = () => {
	return (
		<div>
			<App
				loginFacade={loginFacade}
				itemFacade={itemFacade}
				mealPlanFacade={mealPlanFacade}
				dayPlanFacade={dayPlanFacade}
				createUserFacade={createUserFacade}
			/>
		</div>
	);
};

ReactDOM.render(<AppFacadeTime />, document.getElementById("root"));
