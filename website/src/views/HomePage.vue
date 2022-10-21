<template>
	<LayoutBase> <SliderBase :img-list="sliderImages" /> </LayoutBase>
</template>

<script setup>
import LayoutBase from '@/components/LayoutBase.vue';
import SliderBase from '@/components/SliderBase.vue';
import sliderImg1 from '@/assets/img/slider/1.webp';
import sliderImg2 from '@/assets/img/slider/2.webp';

const sliderImages = [sliderImg1, sliderImg2];
</script>
