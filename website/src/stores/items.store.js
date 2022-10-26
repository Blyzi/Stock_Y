import { $axios } from '../utils/axios';
import { defineStore } from 'pinia';

export const useItemsStore = defineStore('items', {
	state: () => ({
		items: null,
	}),
	actions: {
		async getItems() {
			const { data } = await $axios.get('/items');
			this.items = data;
		},
		async getItem(id) {
			const { data } = await $axios.get(`/items/${id}`);
			return data;
		},
		async createItem(item) {
			const { data } = await $axios.post('/items', item);
			return data;
		},
		async updateItem(id, item) {
			const { data } = await $axios.put(`/items/${id}`, item);
			return data;
		},
		async deleteItem(id) {
			const { data } = await $axios.delete(`/items/${id}`);
			return data;
		},
	},
});
