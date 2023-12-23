<template>
    <div class="h-[538px] mt-[36px] relative overflow-hidden grid">
        <div :style="'transform: translateX('+ index * -100 +'%);'" ref="images" class="flex h-[100%] w-[100%] transition-transform duration-300 ">
            <slot></slot>
        </div>
        <div class="flex absolute p-6 top-0 left-0 items-center justify-between h-[100%] w-[100%] z-20">
            <div @click="decrease" :class="index == 0 ? 'w-8 h-8 rounded-full bg-black bg-opacity-50 flex items-center justify-center' : 'w-8 h-8 rounded-full bg-[#495AB4] flex items-center justify-center'"><img class=" rotate-180" src="./assets/Arrow.svg" alt=""></div>
            <div @click="increase" :class="index == images?.children?.length - 1 ? 'w-8 h-8 rounded-full bg-black bg-opacity-50 flex items-center justify-center' : 'w-8 h-8 rounded-full bg-[#495AB4] flex items-center justify-center'"><img src="./assets/Arrow.svg" alt=""></div>
        </div>
        <div class="flex absolute p-6 top-0 left-0 items-end justify-center h-[100%] w-[100%] z-10">
            <div v-for="(item, i) in images?.children" :class=" i == index ? 'mx-[3px] h-2 w-2 rounded-full bg-white' : 'mx-[3px] h-2 w-2 rounded-full bg-[#FFFFFF] bg-opacity-50'"></div>
        </div>
    </div>
</template>

<script setup>
    import {ref, onMounted} from 'vue'
    const index = ref(0)
    const images = ref(null)
    onMounted(() => {
        console.log(images.value.children)
    })
    const increase = () =>{
        if(index.value == images.value.children.length - 1){
            return
        } else {
            index.value++
        }
    }
    const decrease = () =>{
        if(index.value == 0){
            return
        } else {
            index.value--
        }
    }
</script>