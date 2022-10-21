<template>
	<div class="w-screen h-screen flex items-center justify-center">
		<div class="flex flex-col gap-8 border rounded-md p-8">
			<div class="text-2xl font-semibold">Log in</div>
			<div class="flex flex-col gap-4">
				<InputBase
					v-model="email"
					placeholder="Email"
					class="w-96 p-4"
					type="email"
				/>
				<InputBase
					v-model="password"
					placeholder="Password"
					class="w-96 p-4"
					type="password"
				/>
			</div>

			<button
				class="bg-green-900 w-full text-white px-4 py-2 rounded-md"
				@click="login"
			>
				Login
			</button>

			<div class="flex justify-center items-center text-sm text-gray-500 gap-2">
				<router-link class="" to="/"> Home </router-link>|
				<router-link class="" to="/register"> Register </router-link>
			</div>
		</div>
	</div>
</template>

<script setup>
import InputBase from '@/components/InputBase.vue';
import { ref } from 'vue';

const email = ref('');
const password = ref('');
</script>
