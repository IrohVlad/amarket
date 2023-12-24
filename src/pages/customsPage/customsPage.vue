<template>
  <main class=" font-raleway">
    <Hero :routes="['Главная', 'Услуги', 'Таможенное. оформление']" title="Таможенное оформление"><img
        class=" absolute top-0 left-0 w-[100%] h-[100%] object-center object-cover"
        src="./assets/warehouse-and-customs-2023-06-27-22-50-14-utc 1.png" alt=""></Hero>
    <div class="_container grid grid-cols-[345px_1fr] mt-[120px] relative">
      <div>
        <Sidebar/>
      </div>
      <div class="ml-[95px]">
        <div class=" text-[44px] font-bold max-w-[550px] mb-[40px]">Таможенное оформление</div>
        <Paragraph>Управление цепочкой поставок - это сложная операция из-за торговых барьеров и требований соответствия
          таможенным правилам. Поэтому у нас есть решения, специально разработанные для вашего товарооборота. Мы
          помогаем вам производить таможенное оформление ваших отправлений в срок, независимо от объема, масштаба или
          характера.
        </Paragraph>
        <Slider>
          <img class="h-[100%] w-[100%] object-cover" src="./assets/unsplash_DEMrRuvJvqo.png" alt="">
          <img class="h-[100%] w-[100%] object-cover" src="./assets/unsplash_DEMrRuvJvqo.png" alt="">
        </Slider>
        <Paragraph>Независимо от того, импортируете вы товары или экспортируете, мы предлагаем широкий спектр услуг,
          соответствующих вашей логистической цепи. Мы поможем вам подготовить и обработать декларации, рассчитать
          пошлины и налоги, а также организовать инспекции. С нашей помощью вы сможете снизить риски и контролировать
          затраты по трансграничным операциям.
        </Paragraph>
        <div class="font-bold text-[28px] my-[60px]">
          Наши преимущества
        </div>
        <div class="grid grid-cols-[1fr_1fr] gap-x-[46px] gax-y-8">
          <div class="flex items-center">
            <div class="mr-4"><img src="./assets/ok.svg" alt=""></div>
            <div class="font-semibold text-[20px]">Работаем согласно вашим требованиям</div>
          </div>
          <div class="flex items-center">
            <div class="mr-4"><img src="./assets/ok.svg" alt=""></div>
            <div class="font-semibold text-[20px]">Работаем согласно вашим требованиям</div>
          </div>
          <div class="flex items-center">
            <div class="mr-4"><img src="./assets/ok.svg" alt=""></div>
            <div class="font-semibold text-[20px]">Работаем согласно вашим требованиям</div>
          </div>
          <div class="flex items-center">
            <div class="mr-4"><img src="./assets/ok.svg" alt=""></div>
            <div class="font-semibold text-[20px]">Работаем согласно вашим требованиям</div>
          </div>
          <div class="flex items-center">
            <div class="mr-4"><img src="./assets/ok.svg" alt=""></div>
            <div class="font-semibold text-[20px]">Работаем согласно вашим требованиям</div>
          </div>
        </div>
        <div class="font-bold text-[28px] mt-[80px]">
          Мы отвечаем за:
        </div>
        <Paragraph>Вы можете воспользоваться всеми преимуществами услуги таможенного оформления, включая оперативное
          реагирование на изменения в таможенных регуляциях, процедурах и лицензиях, которые влияют на ваш бизнес.
        </Paragraph>
        <div class="mt-[60px] mb-8">
          <div class="flex items-start pb-6 border-b border-opacity-20 gap-x-[85px]">
            <div class="w-[326px] flex items-center">
              <div class="mr-4"><img src="./assets/icon1.svg" alt=""></div>
              <div class="font-semibold text-[22px]">Импорт :</div>
            </div>
            <ul>
              <li class=" mb-2 before:w-2 before:h-2 before:bg-[#495AB4] before:rounded-full flex items-center before:mr-3">
                Уплата пошлин
              </li>
              <li class=" mb-2 before:w-2 before:h-2 before:bg-[#495AB4] before:rounded-full flex items-center before:mr-3">
                Заполнение деклараций
              </li>
              <li class=" mb-2 before:w-2 before:h-2 before:bg-[#495AB4] before:rounded-full flex items-center before:mr-3">
                Проверка соответствия документации
              </li>
              <li class=" before:w-2 before:h-2 before:bg-[#495AB4] before:rounded-full flex items-center before:mr-3">
                Точное оформление деклараций по импорту
              </li>
            </ul>
          </div>
          <div class="flex mt-8 items-start pb-6 border-b border-opacity-20 gap-x-[85px]">
            <div class="w-[326px] flex items-center">
              <div class="mr-4"><img src="./assets/icon2.svg" alt=""></div>
              <div class="font-semibold text-[22px]">Экспорт :</div>
            </div>
            <ul>
              <li class=" mb-2 before:w-2 before:h-2 before:bg-[#495AB4] before:rounded-full flex items-center before:mr-3">
                Оформление экспортных деклараций
              </li>
              <li class=" mb-2 before:w-2 before:h-2 before:bg-[#495AB4] before:rounded-full flex items-center before:mr-3">
                Управление происхождением товара
              </li>
              <li class=" mb-2 before:w-2 before:h-2 before:bg-[#495AB4] before:rounded-full flex items-center before:mr-3">
                Управление лицензиями на товары
              </li>
              <li class=" before:w-2 before:h-2 before:bg-[#495AB4] before:rounded-full flex items-center before:mr-3">
                Проверка соответствия документации
              </li>
            </ul>
          </div>
          <div class="flex mt-8 items-start pb-6 border-b border-opacity-20 gap-x-[85px]">
            <div class="w-[326px] flex items-center">
              <div class="mr-4"><img src="./assets/icon3.svg" alt=""></div>
              <div class="font-semibold text-[22px]">Транзит :</div>
            </div>
            <ul>
              <li class=" mb-2 before:w-2 before:h-2 before:bg-[#495AB4] before:rounded-full flex items-center before:mr-3">
                Оформление деклараций
              </li>
              <li class=" mb-2 before:w-2 before:h-2 before:bg-[#495AB4] before:rounded-full flex items-center before:mr-3">
                Управление дальнейшим перемещением
              </li>
              <li class=" mb-2 before:w-2 before:h-2 before:bg-[#495AB4] before:rounded-full flex items-center before:mr-3">
                Своевременная поставка товара
              </li>
              <li class=" before:w-2 before:h-2 before:bg-[#495AB4] before:rounded-full flex items-center before:mr-3">
                Минимизация задержек в пути
              </li>
            </ul>
          </div>
        </div>
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