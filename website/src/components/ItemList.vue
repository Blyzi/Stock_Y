<template>
	<div class="flex flex-col gap-2">
		<div class="font-semibold">
			<slot name="title" />
		</div>
		<div class="flex gap-2">
			<ItemCard v-for="(item, i) in itemList" :key="i" :item="item" />
		</div>
	</div>
</template>

<script setup>
import { defineProps } from 'vue';
import ItemCard from '@/components/ItemCard.vue';

defineProps({
	itemList: {
		type: Array,
		required: true,
	},
});
</script>
