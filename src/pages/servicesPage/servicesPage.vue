<template>
  <main class=" font-raleway">
    <Hero :routes="['Главная', 'Услуги']" :title="'Услуги'"><img
        class=" absolute top-0 left-0 w-[100%] h-[100%] object-center object-cover" src="./assets/bg.png" alt=""></Hero>
    <Offers/>
    <Advantages/>
    <ServicesForm/>
  </main>
</template>

<script setup>
import Hero from '../../widgets/hero/hero.vue';
import Offers from '../../widgets/offers/offers.vue';
import Advantages from '../../widgets/advantages/advantages.vue';
import ServicesForm from '../../widgets/servicesForm/servicesForm.vue'
</script>