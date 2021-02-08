import fetch from "node-fetch";

export const fetchModel = (param) => {
	return fetch(`https://api.mocki.io/v1/${param}`).then((res) => res.json());
}