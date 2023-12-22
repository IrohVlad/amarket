<script setup>
import Header from "../../widgets/header/header.vue";
import Footer from '../../widgets/footer/footer.vue';
import { useRouter } from "vue-router";

const router = useRouter();

const main = () => {
  router.push("/");
};
</script>

<template>
  <Header/>
  <div
    class="mobile flex items-center min-h-screen p-4 bg-white lg:justify-center"
  >
    <div class="max-w-[52%] mx-20 text-center my-16">
      <img src="./assets/port.png" alt="truck" />
      <span class="py-3 font-medium text-sm text-[#858585]"
        >CARGO PRO - ваш ключ к простой и быстрой логистике</span
      >
    </div>

    <div
      class="flex flex-col overflow-hidden bg-white rounded-md max md:flex-row md:flex-1 lg:max-w-screen-md"
    >
      <div class="p-5 bg-white md:flex-1 mr-16">
        <h3 class="mb-6 font-bold text-4xl text-[#212121]">Спасибо!</h3>
        <p class="text-[#212121] text-base font-light mb-6">
          Спасибо за регистрацию на нашем сайте! Ваш аккаунт был успешно создан.
          Теперь вы можете войти на сайт и наслаждаться всеми преимуществами,
          которые мы предоставляем нашим пользователям. Если у вас возникнут
          какие-либо вопросы или проблемы, пожалуйста, свяжитесь с нашей службой
          поддержки. Мы всегда готовы помочь вам в любое время.
        </p>
        <div>
          <button
            type="button"
            class="enterbtn bg-[#3447AB] w-full px-8 py-4 text-sm font-bold text-white transition-colors duration-300 rounded-xl shadow hover:text-black focus:outline-none focus:ring-blue-200 focus:ring-4"
            @click="main"
          >
            Перейти на главную
          </button>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<style scoped>
@media screen and (max-width: 767px) {
  .mobile {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    min-height: 100vh;
    padding: 4px;
    background-color: white;
    justify-content: center;
  }
}
</style>
