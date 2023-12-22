<template>
  <header>
    <div class="_container h-[70px] flex justify-between items-center">
      <div><img src="./assets/logo.svg" alt=""></div>
      <nav>
        <ul class="flex font-semibold font-raleway text-sm text-[#6C6C6C]">
          <li class=" mr-12 hover:text-black transition-colors duration-300 cursor-pointer">
            <router-link active-class="text-black" to="/">Главная</router-link>
          </li>
          <li class=" mr-12 hover:text-black transition-colors duration-300 cursor-pointer">
            <router-link active-class="text-black" to="#">Маркет</router-link>
          </li>
          <li class=" mr-12 hover:text-black transition-colors duration-300 cursor-pointer">
            <router-link active-class="text-black" to="#">Карго</router-link>
          </li>
          <li class=" mr-12 hover:text-black transition-colors duration-300 cursor-pointer">
            <router-link active-class="text-black" to="/about">О компании</router-link>
          </li>
          <li class=" mr-12 hover:text-black transition-colors duration-300 cursor-pointer flex items-center">
            <div class="mr-2">Информация</div>
            <div>
              <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.1666 1.16667L5.49992 5.83334L0.833252 1.16667" stroke="currentColor" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </li>
          <li class=" mr-12 hover:text-black transition-colors duration-300 cursor-pointer">
            <router-link active-class="text-black" to="/services">Услуги</router-link>
          </li>
          <li class=" mr-12 hover:text-black transition-colors duration-300 cursor-pointer">
            <router-link active-class="text-black" to="#">Контакты</router-link>
          </li>
          <li class=" hover:text-black transition-colors duration-300 cursor-pointer">
            <router-link active-class="text-black" to="#">Блог</router-link>
          </li>
        </ul>
      </nav>
      <vueButton rounded="true">
        <router-link active-class="text-black" to="/auth"><div class=" font-semibold text-[14px]">Войти</div></router-link>
      </vueButton>
    </div>
  </header>
</template>

<script setup>
import vueButton from '../../shared/button/button.vue';
</script>