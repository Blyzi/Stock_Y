<template></template>

<script setup>
import { defineProps } from 'vue';

defineProps({
	item: {
		type: Object,
		required: true,
	},
});
</script>
