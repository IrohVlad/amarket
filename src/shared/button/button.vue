<template>
    <div :class=" rounded ? 'text-white w-fit bg-[#3447AB] opacity-90 op px-[25px] py-[10px] rounded-[7px] hover:opacity-100 transition-opacity duration-300 cursor-pointer' : 'text-white w-fit bg-[#3447AB] opacity-90 op px-[25px] py-[10px] hover:opacity-100 transition-opacity duration-300 cursor-pointer'">
        <slot></slot>
    </div>
</template>

<script setup>
    const props = defineProps({
        rounded: Boolean
    })
</script>