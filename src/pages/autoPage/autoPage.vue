<template>
  <main class=" font-raleway">
    <Hero :routes="['Главная', 'Услуги', 'Автомобильные перевозки']" title="Автомобильные перевозки"><img
        class=" absolute top-0 left-0 w-[100%] h-[100%] object-center object-cover"
        src="./assets/aerial-view-of-colorful-freight-trains-2022-02-02-05-05-43-utc.png" alt=""></Hero>
    <div class="_container grid grid-cols-[345px_1fr] mt-[120px] relative">
      <div>
        <Sidebar/>
      </div>
      <div class="ml-[95px]">
        <div class=" text-[44px] font-bold max-w-[550px] mb-[40px]">Автомобильные перевозки</div>
        <Paragraph>Наши услуги по грузоперевозкам быстры, эффективны и надежны, даже в этих сложных условиях. Мы
          доставляем товары вовремя, минуя пробки на границах, и работаем со своими собственными службами доставки в 20
          разных странах. Мы можем увеличивать свои возможности в соответствии с потребностями клиентов.
        </Paragraph>
        <Slider>
          <img class="h-[100%] w-[100%] object-cover" src="./assets/auto_cargo_bg.jpg" alt="">
          <img class="h-[100%] w-[100%] object-cover" src="./assets/auto_cargo_bg.jpg" alt="">
        </Slider>
        <div class="font-bold text-[28px] mt-[60px]">
          Наши преимущества
        </div>
        <Paragraph>Мы всегда остаемся одной из транспортно-логистических компаний, к которой клиенты обращаются с
          ожиданием надежной доставки своих отправлений.
        </Paragraph>
        <div class="mb-[40px] h-[560px] grid grid-cols-[1fr_1fr] gap-[12px] grid-rows-[274px_274px]">
          <div><img class="h-[100%] w-[100%] object-cover" src="./assets/unsplash_sNY6B9NsPP8 (1).png" alt=""></div>
          <div class="row-span-2"><img class="h-[100%] w-[100%] object-cover" src="./assets/unsplash_sNY6B9NsPP8.png"
                                       alt=""></div>
          <div><img class="h-[100%] w-[100%] object-cover" src="./assets/unsplash__VwkL9LVa-M (1).png" alt=""></div>
        </div>
        <p class="mb-[36px] text-[16px] text-[#6C6C6C] leading-[26px]">Благодаря нашим увлеченным сотрудникам, которые
          гарантируют, что все товары достигают места назначения быстро и безопасно, мы делаем все возможное, чтобы
          отправления добирались до своих пунктов назначения. Гибкие и экологичные железнодорожные услуги обеспечивают
          надежные и заранее определенные отправления по расписанию.</p>
        <ul class="mb-[40px] grid grid-cols-[300px_300px] gap-x-[48px] gap-y-[32px] text-[20px] font-semibold">
          <li class="flex items-center">
            <div class="mr-3"><img src="./assets/icon.svg" alt=""></div>
            Конкурентоспособные цены
          </li>
          <li class="flex items-center">
            <div class="mr-3"><img src="./assets/icon1.svg" alt=""></div>
            Всегда вовремя
          </li>
          <li class="flex items-center">
            <div class="mr-3"><img src="./assets/icon2.svg" alt=""></div>
            Передовая технология
          </li>
          <li class="flex items-center">
            <div class="mr-3"><img src="./assets/icon3.svg" alt=""></div>
            Быстрый и надежный
          </li>
          <li class="flex items-center">
            <div class="mr-3"><img src="./assets/icon4.svg" alt=""></div>
            24/7 поддержка
          </li>
          <li class="flex items-center">
            <div class="mr-3"><img src="./assets/icon5.svg" alt=""></div>
            Безопасная упаковка
          </li>
        </ul>
        <p class="mb-[80px] text-[16px] text-[#6C6C6C] leading-[26px]">Мы гордимся тем, что обслуживаем более 3,000
          клиентов, и являемся самым экологичным способом наземного транспортирования.</p>
        <Button :rounded="true" class="mb-[150px]">
          <div class=" text-white w-fit font-semibold">Загрузить брошуру с нашими услугами</div>
        </Button>
      </div>
    </div>
    <Trucks/>
  </main>
</template>

<script setup>
import Hero from '../../widgets/hero/hero.vue';
import Sidebar from '../../features/servicesSidebar/servicesSidebar.vue';
import Trucks from '../../widgets/trucks/trucks.vue';
import Slider from '../../entities/slider/slider.vue';
import Paragraph from '../../shared/paragraph/paragraph.vue'
import Button from '../../shared/button/button.vue';
</script>