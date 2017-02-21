const rootURI = 'https://swapi.co/api/';

async function getJSON(uri) {
	const response = await fetch(uri);
	if (response.ok) {
		const json = await response.json();
		return json;
	} else {
		throw new Error(response);
	}
}

function getList(name) {
	return async function() {
		return getJSON(`${rootURI}${name}/`);
	};
}

function getOne(name) {
	return async function(id) {
		return getJSON(`${rootURI}${name}/${id}/`);
	}
}

export async function getResources() {
	return getJSON(rootURI);
}

export const getPeople = getList('people');
export const getPerson = getOne('people');

export const getPlanets = getList('planets');
export const getPlanet = getOne('planets');

export const getFilms = getList('films');
export const getFilm = getOne('films');

export const getAllSpecies = getList('species');
export const getSpecies = getOne('species');

export const getVehicles = getList('vehicles');
export const getVehicle = getOne('vehicles');

export const getStarships = getList('starships');
export const getStarship = getOne('starships');
