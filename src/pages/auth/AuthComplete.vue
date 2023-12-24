<script setup>
import { ref } from "vue";

const user = ref({
  name: "",
  password: "",
});
</script>

<template>
  <div
    class="text-sm py-2 font-medium border border-solid border-[#27357E] bg-[#27357E26] relative left-[920px] rounded-lg text-center w-60 h-10 text-[#212121]"
  >
    Вы успешно вошли!
  </div>
  <div
    class="mobile flex items-center min-h-screen p-4 bg-white lg:justify-center"
  >
    <div class="max-w-[52%] mx-20 text-center my-[24px]">
      <img src="./assets/truck.png" alt="truck" />
      <span class="py-3 font-medium text-sm text-[#858585]"
        >CARGO PRO - ваш ключ к простой и быстрой логистике</span
      >
    </div>

    <div
      class="flex flex-col overflow-hidden bg-white rounded-md max md:flex-row md:flex-1 lg:max-w-screen-md"
    >
      <div class="p-5 bg-white md:flex-1 mr-16">
        <h3 class="mb-16 font-bold text-4xl text-[#212121]">Войти</h3>
        <form @submit.prevent="goToComplete" class="flex flex-col space-y-5">
          <div class="flex flex-col space-y-1">
            <input
              v-model="user.name"
              type="email"
              id="email"
              autofocus
              placeholder="Email или номер телефона"
              class="px-6 py-4 text-xs transition duration-300 border border-gray-300 rounded-xl focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              required
            />
          </div>
          <div class="flex flex-col space-y-1">
            <div class="flex items-center justify-between"></div>
            <input
              v-model="user.password"
              type="password"
              id="password"
              placeholder="Пароль"
              class="px-6 py-4 mb-4 text-xs transition duration-300 border border-gray-300 rounded-xl focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              required
            />
            <span class="text-xs text-stone-600">
              Забыли логин или пароль? Перейдите по
              <a
                href="#"
                class="text-indigo-900 text-x hover:underline focus:text-blue-800"
                >ссылке</a
              >
            </span>
          </div>
          <div>
            <button
              type="submit"
              class="enterbtn bg-[#3447AB] w-full px-8 py-4 text-sm font-bold text-white transition-colors duration-300 rounded-xl shadow hover:text-black focus:outline-none focus:ring-blue-200 focus:ring-4"
            >
              Войти
            </button>
          </div>
          <div class="flex flex-col space-y-5">
            <span class="flex items-center justify-center space-x-2">
              <span class="h-px bg-[#D8D8D8] w-1/2"></span>
              <span class="font-normal text-[#212121]">или</span>
              <span class="h-px bg-[#D8D8D8] w-1/2"></span>
            </span>
            <div class="flex flex-col space-y-4">
              <a
                href="#"
                class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-300 rounded-xl group hover:bg-gray-800 focus:outline-none"
              >
                <span>
                  <img src="./assets/SocialIcons/Google.png" alt="google" />
                </span>
                <span
                  class="font-mont text-sm py-2 font-medium text-[#212121] group-hover:text-white"
                  >Войти с Google</span
                >
              </a>
              <span class="text-sm text-center text-stone-600">
                У вас еще нет аккаунта?
                <router-link
                  to="/reg"
                  class="font-inter text-indigo-900 text-x hover:underline focus:text-blue-800"
                >
                  Зарегистрироваться
                </router-link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pass-recover-link {
  color: (52, 71, 171, 0.9);
}
.font-mont {
  font-family: "Montserrat", sans-serif;
}

.font-inter {
  font-family: "Inter", sans-serif;
}

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
