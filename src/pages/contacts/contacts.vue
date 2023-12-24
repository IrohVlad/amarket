<script setup>

import Hero from "../../widgets/hero/hero.vue";
import ContactForm from "../../components/modules/ContactForm/ContactForm.vue";
import Adresses from "../../widgets/adresses/adresses.vue";
</script>

<template>
  <Hero :routes="['Главная', 'Контакты']" :title="'Контакты'"><img
      class=" absolute top-0 left-0 w-[100%] h-[100%] object-center object-cover" src="./assets/hero.png"
      alt="contacts">
  </Hero>
  <ContactForm></ContactForm>
  <Adresses></Adresses>
  <div class="grid">
    <img src="./assets/map.png" alt="map" class="object-cover w-full">
  </div>
</template>

<style scoped>

</style>