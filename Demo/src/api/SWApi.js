const rootURI = 'http://swapi.co/api/';

async function getJSON(uri) {
	const response = await fetch(uri);
	if (response.ok) {
		const json = await response.json();
		return json;
	} else {
		throw new Error(response);
	}
}

export async function getResources() {
	return getJSON(rootURI);
}

export async function getPeople() {
	return getJSON(`${rootURI}people`);
}

export async function getPerson(id) {
	return getJSON(`${rootURI}people/${id}`);
}
