import { defineStore } from 'pinia';
import { $axios } from '../utils/axios';

export const useUsersStore = defineStore({
	state: () => ({
		users: null,
	}),
	actions: {
		async login({ email, password }) {
			const { data } = await $axios.post('/login', { email, password });
			return data;
		},
		async register({ email, password }) {
			const { data } = await $axios.post('/register', { email, password });
			return data;
		},
	},
});
