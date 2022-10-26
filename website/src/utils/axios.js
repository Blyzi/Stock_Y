import axios from 'axios';

export const $axios = axios.create({
	baseURL: 'http://localhost:3000/',
});

$axios.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);
