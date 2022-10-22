<template>
	<div class="border rounded-md flex items-center" @click="input.focus()">
		<component :is="icon" v-if="icon" class="h-6 w-6 mx-4"></component>
		<input
			ref="input"
			:type="type"
			class="h-full flex-grow outline-none"
			:placeholder="placeholder"
			:value="value"
			@input="$emit('update:value', $event.target.value)"
		/>
	</div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

defineProps({
	placeholder: {
		type: String,
		default: 'Search something...',
	},
	value: {
		type: String,
		default: '',
	},
	type: {
		type: String,
		default: 'text',
	},
	icon: {
		default: null,
		type: Function,
	},
});

defineEmits(['update:value']);

const input = ref(null);
</script>
