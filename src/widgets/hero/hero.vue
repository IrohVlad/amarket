<template>
    <section class=" relative text-white">
        <div class=" _container h-[362px] flex flex-col justify-center relative z-10">
            <div class=" text-[56px] font-bold mb-5">{{ title }}</div>
            <vuePath :routes="routes"/>
        </div>
        <slot></slot>
        <div class="absolute top-0 left-0 w-[100%] h-[100%] bg-[#202020] opacity-50"></div>
    </section>
</template>

<script setup> 
import vuePath from '../../shared/path/path.vue';
const props = defineProps({
    title: String,
    routes: Array
})
</script>