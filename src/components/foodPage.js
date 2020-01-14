import React, { useState, useEffect } from "react";
import utils, { catchHttpErrors } from "../utils";
import {
	Route,
	Link,
	useRouteMatch,
	useParams,
	Redirect,
	Prompt
} from "react-router-dom";

const FoodPage = ({
	loggedIn,
	foodInfo,
	recipeFacade,
	setFoodInfo,
	id,
	setId
}) => {
	const match = useRouteMatch();

	const handleChange = evt => {
		const target = evt.target;
		const value = target.value;
		setId(value);
	};

	if (!loggedIn) {
		return <Redirect to={"/loggedOut"} />;
	} else {
		return (
			<div>
				<div>
					<RecipeTable
						recipeFacade={recipeFacade}
						foodInfo={foodInfo}
						setFoodInfo={setFoodInfo}
					/>
				</div>
			</div>
		);
	}
};

const RecipeTable = ({ recipeFacade, foodInfo, setFoodInfo }) => {
	let { id } = useParams();

	useEffect(() => {
		recipeFacade
			.readAll()
			.then(d => setFoodInfo(utils.embeddedTableCreation(d)))
			.catch(catchHttpErrors);
	}, [id]);

	return (
		<div>
			<hr />
			{foodInfo}
		</div>
	);
};

export default FoodPage;
