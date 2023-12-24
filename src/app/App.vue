<template>
  <Header/>
    <router-view></router-view>
  <Footer/>
</template>

<script setup>
import Header from "../widgets/header/Header.vue";
import Footer from "../widgets/footer/footer.vue";
</script>