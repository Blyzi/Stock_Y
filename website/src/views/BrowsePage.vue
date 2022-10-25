<template>
	<LayoutBase>
		<div class="bg-orange-100 flex flex-col gap-2 p-4 mb-8">
			<div class="font-semibold text-xl">
				{{
					typeof $route.params.type !== 'undefined'
						? category[$route.params.type].name
						: category.all.name
				}}
			</div>
			<div class="text-sm">
				{{
					typeof $route.params.type !== 'undefined'
						? category[$route.params.type].description
						: category.all.description
				}}
			</div>
		</div>
		<div class="flex justify-between gap-8">
			<div class="flex flex-col font-bold text-xl">
				<router-link v-for="(link, i) in category" :key="i" :to="link.link">
					{{ link.name }}
				</router-link>
			</div>
			<div class="flex flex-col gap-4">
				<div class="flex flex-row-reverse">
					<InputBase class="py-2 pr-2" :icon="MagnifyingGlassIcon" />
				</div>
				<div></div>
			</div>
		</div>
	</LayoutBase>
</template>

<script setup>
import LayoutBase from '@/components/LayoutBase.vue';
import InputBase from '@/components/InputBase.vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';

const category = {
	sneakers: {
		name: 'Sneakers',
		link: '/browse/sneakers',
		description:
			'Every sneaker you want is always available and verified by StockY. Buy and sell new sneakers & shoes from Ground Jordan, adadas, Itta, Yard and more!',
	},
	clothes: {
		name: 'Clothes',
		link: '/browse/clothes',
		description:
			'Supreme, OFF-WHITE, Fear of God, Travis Scott, BAPE, & more. Buy & sell streetwear right here on StockY.',
	},
	accessories: {
		name: 'Accessories',
		link: '/browse/accessories',
		description:
			'Buy & Sell the latest luxury handbags, watches and accessories from Telfar, Louis Vuitton, Supreme, Rolex and more on StockY.',
	},
	all: {
		name: 'All',
		link: '/browse',
		description: 'Buy & Sell everythings on StockY.',
	},
};
</script>
