<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const isCheckedConf = ref(false);
const isCheckedRemember = ref(false);

const router = useRouter();

const next = () => {
  router.push("/regcomplete");
};
</script>

<template>
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
        <h3 class="mb-16 font-bold text-4xl text-[#212121]">Регистрация</h3>
        <form @submit.prevent="goToComplete" class="flex flex-col space-y-5">
          <div class="flex flex-col space-y-1">
            <input
              type="text"
              id="full-name"
              autofocus
              placeholder="ФИО"
              class="px-6 py-4 text-xs transition duration-300 border border-gray-300 rounded-xl focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <div class="flex items-center justify-between"></div>
            <input
              type="number"
              id="phone"
              placeholder="Номер телефона"
              class="px-6 py-4 mb-4 text-xs transition duration-300 border border-gray-300 rounded-xl focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <div class="flex items-center justify-between"></div>
            <input
              type="number"
              id="birth-date"
              placeholder="Дата рождения"
              class="px-6 py-4 mb-4 text-xs transition duration-300 border border-gray-300 rounded-xl focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <div class="flex items-center justify-between"></div>
            <input
              type="text"
              id="city"
              placeholder="Город"
              class="px-6 py-4 mb-4 text-xs transition duration-300 border border-gray-300 rounded-xl focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <div class="flex items-center justify-between"></div>
            <input
              type="text"
              id="adress"
              placeholder="Адрес доставки"
              class="px-6 py-4 mb-4 text-xs transition duration-300 border border-gray-300 rounded-xl focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <div class="flex items-center justify-between"></div>
            <input
              type="number"
              id="code"
              placeholder="Код приглашения"
              class="px-6 py-4 mb-4 text-xs transition duration-300 border border-gray-300 rounded-xl focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
          <div class="flex items-center space-x-2">
            <input
              type="checkbox"
              id="conf"
              class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
              :checked="isCheckedConf"
            />
            <label for="conf" class="text-sm font-semibold text-gray-500"
              >Политика конфиденциальности</label
            >
          </div>
          <div class="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember"
              class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
              :checked="isCheckedRemember"
            />
            <label for="remember" class="text-sm font-semibold text-gray-500"
              >Пользовательское соглашение</label
            >
          </div>

          <div>
            <button
              type="button"
              class="enterbtn bg-[#3447AB] w-full px-8 py-4 text-sm font-bold text-white transition-colors duration-300 rounded-xl shadow hover:text-black focus:outline-none focus:ring-blue-200 focus:ring-4"
              @click="next"
            >
              Далее
            </button>
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
