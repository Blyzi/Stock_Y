import HomePage from '@/views/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomePage,
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('@/views/AboutPage.vue'),
	},
	{
		path: '/contact',
		name: 'Contact',
		component: () => import('@/views/ContactPage.vue'),
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/views/LoginPage.vue'),
	},
	{
		path: '/register',
		name: 'Register',
		component: () => import('@/views/RegisterPage.vue'),
	},
	{
		path: '/sell',
		name: 'Sell',
		component: () => import('@/views/SellPage.vue'),
	},
];

export default createRouter({
	history: createWebHistory(),
	routes,
});
