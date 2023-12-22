<script setup>
import Button from "../../components/common/Button.vue";
import SkillCard from "../../components/modules/SkillCard.vue";
import ReviewCard from "../../components/modules/ReviewCard.vue";
import Header from "../../widgets/header/header.vue";
import Footer from '../../widgets/footer/footer.vue';

const reviewItems = [
  {id: 1, title: 'Совершено перевозок', images: 'src/pages/home/assets/images/icons/transportetion.svg', score: 950},
  {id: 2, title: 'Довольных клиентов', images: 'src/pages/home/assets/images/icons/clients.svg', score: 1205},
  {id: 3, title: 'Членов команды', images: 'src/pages/home/assets/images/icons/team.svg', score: 120},
]

const newsItem = [
  {
    id: 1,
    title: 'Стоимость перевозки контейнеров',
    description: 'Сталкиваетесь с проблемами стоимости и прогнозирования? Нужны решения?',
    image: 'src/pages/home/assets/images/background/a-container-gantry-crane.png',
    type: 'Транспортировка',
    data: {day: 16, month: 'Авг.', year: 2021}
  },
  {
    id: 2,
    title: 'Управление цепочкой поставок',
    description: 'Управление цепочкой поставок - важная и незаменимая часть большинства бизнесов.',
    image: 'src/pages/home/assets/images/background/containers-warehouse.png',
    type: 'Цепочки поставок',
    data: {day: 16, month: 'Авг.', year: 2021}
  },
  {
    id: 3,
    title: 'Ваши логистические проблемы',
    description: 'Глобальные цепочки поставок, на которые опирается множество розничных продавцов, нарушены на длительный срок.',
    image: 'src/pages/home/assets/images/background/a-container-gantry-crane.png',
    type: 'Логистика',
    data: {day: 16, month: 'Авг.', year: 2021}
  },
]

const skillItems = [
  {
    id: 1,
    title: 'Морские перевозки',
    description: 'Мы предлагаем морские грузоперевозки из страны и в страну',
    images: 'src/pages/home/assets/images/icons/shipping.svg'
  },
  {
    id: 2,
    title: 'Авиаперевозки',
    description: 'Мы являемся агентом крупных и надежных авиакомпаний с высокой частотой рейсов.',
    images: 'src/pages/home/assets/images/icons/aviatrans.svg'
  },
  {
    id: 3,
    title: 'Железнодорожные перевозки',
    description: 'Безопасные, надежные и экологичные решения',
    images: 'src/pages/home/assets/images/icons/railtrans.svg'
  },
  {
    id: 4,
    title: 'Автомобильные перевозки',
    description: 'Мы предоставляем высококачественные и надежные услуги по дорожной перевозке грузов.',
    images: 'src/pages/home/assets/images/icons/avtotrans.svg'
  },
  {
    id: 5,
    title: 'Складские услуги',
    description: 'У нас есть возможности для эффективного управления вашей логистической цепью, на начальном этапе или на месте назначения.',
    images: 'src/pages/home/assets/images/icons/warehouse.svg'
  },
  {
    id: 6,
    title: 'Таможенное оформление',
    description: 'Мы поможем вам с оформлением груза в таможне без лишних сложностей.',
    images: 'src/pages/home/assets/images/icons/customs.svg'
  }
];
</script>

<template>
  <Header/>
  <div class="back relative w-full bg-blend-darken bg-no-repeat mb-20">
    <div class="flex justify-start items-center z-10 relative mx-auto w-fit">
      <div class="ml-64 mt-28 flex flex-col gap-6 w-2/5 text-white">
        <div>
          <p class="text-sm py-1">Доставка груза: без границ и ограничений</p>
          <div class="w-52 border-t border-blue-700"></div>
        </div>
        <div class="mb-24 flex flex-col gap-5">
          <p class="text-6xl"><b>ASIAFY - ваш ключ к простой и быстрой логистике.</b></p>
          <p class="text-lg">Доверьте нам свои отправления, и мы гарантируем их своевременную и надежную доставку. Все
            ваши потребности - наш приоритет!</p>
        </div>
        <div>
          <Button>Наши сервисы</Button>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center items-center mb-18 py-20">
    <div class="logistic flex justify-center flex-wrap">
      <div class="w-2/5 basis-2/5 mr-16">
        <h2 class="font-bold text-4xl mb-10">Ведущая компания в<br/> сфере транспортировки и логистики</h2>
        <p class="text-[#6C6C6C]">Мы предоставляем высококачественные комплексные услуги и<br/> всегда учитываем
          потребности наших клиентов.</p>
      </div>
      <SkillCard v-for="item in skillItems" :key="item.id" :images="item.images" :title="item.title"
                 :description="item.description"/>
    </div>
  </div>
  <div class="transport-container flex w-full">
    <div class="man-on-railway"
         style="background-image: url('src/pages/home/assets/images/background/man-on-railway-track.png')">
    </div>
    <div class="transport p-20 flex flex-col gap-16 justify-center">
      <div>
        <h2 class="text-white font-bold text-5xl mb-10">Транспорт</h2>
        <p class="text-[#E7E7E7]">Услуги по транспортировке гарантируют быстрое и<br/> своевременное прохождение грузов
          через<br/> границы.</p>
      </div>
      <div class="text-white font-bold gap-5 w-96 grid grid-cols-2 items-center">
        <div class="flex gap-3 w-40">
          <img src="./assets/images/icons/check.svg" alt="check">
          <span>По морю</span>4
        </div>
        <div class="flex gap-3 w-40">
          <img src="./assets/images/icons/check.svg" alt="check">
          <span>По воздуху</span>
        </div>
        <div class="flex gap-3 w-40">
          <img src="./assets/images/icons/check.svg" alt="check">
          <span>По Ж/Д</span>
        </div>
        <div class="flex gap-3 w-40 whitespace-nowrap">
          <img src="./assets/images/icons/check.svg" alt="check">
          <span>Наземная перевозка</span>
        </div>
      </div>
      <div>
        <Button buttonClasses="flex justify-center items-center gap-3">
          <span>Больше наших сервисов</span>
          <img src="./assets/images/icons/arrowleft.svg" alt="arrow">
        </Button>
      </div>
    </div>
  </div>
  <div class="w-full flex justify-center py-32">
    <div class="flex justify-center items-center gap-32">
      <div>
        <div class="mb-20 flex flex-col gap-10">
          <h2 class="text-5xl font-bold">
            Профессионалы в<br/> траспортировке
          </h2>
          <p>
            Мы предоставляем комплексные услуги по транспортировке для<br/>
            наших партнеров по всему миру и всегда предлагаем<br/>
            инновационные решения для сложных логистических задач.
          </p>
        </div>
        <Button buttonClasses="px-20">О нас</Button>
      </div>
      <div class="review flex flex-col flex-wrap justify-center gap-5">
        <ReviewCard v-for="(item, index) in reviewItems" :key="item.id" :images="item.images" :score="item.score"
                    :title="item.title"
                    :style="{ flexBasis: index === 0 ? '55%' : 'auto', backgroundColor: index === 0 ? 'black' : 'auto', color: index === 0 ? 'white' : 'auto' }"
        />
      </div>
    </div>
  </div>
  <div class="bg-[#F8F8F8] w-full flex justify-center py-32">
    <div>
      <div class="flex justify-between">
        <h2 class="text-4xl font-bold mb-20">Новости</h2>
        <div class="flex">
          <div class="flex items-center justify-center w-10 h-10 bg-white">
            <img src="./assets/images/icons/arrow-right.svg" alt="arrow-left">
          </div>
          <div class="flex items-center justify-center w-10 h-10 bg-blue-700 cursor-pointer">
            <img src="./assets/images/icons/arrowleft.svg" alt="arrow-right">
          </div>
        </div>
      </div>
      <div class="flex gap-10">
        <div class="flex flex-col gap-5 w-96" v-for="item in newsItem" :key="item.id">
          <div>
            <img :src="item.image" alt="news">
          </div>
          <div class="flex flex-col gap-5">
            <div class="flex justify-between">
              <div class="flex items-center gap-2">
                <img src="./assets/images/icons/folder.svg" alt="folder">
                <span class="text-[#6C6C6C]">{{ item.type }}</span>
              </div>
              <div class="border-r-2"></div>
              <div class="flex items-center gap-2 mr-5">
                <img src="./assets/images/icons/time-сircle.svg" alt="time">
                <span class="text-[#6C6C6C]">{{ item.data.day }}, {{ item.data.month }} {{ item.data.year }}</span>
              </div>
            </div>
            <div>
              <h2 class="text-2xl font-bold pr-6">{{ item.title }}</h2>
            </div>
            <div>
              <p class="text-[#6C6C6C]">{{ item.description }}</p>
            </div>
            <div>
              <a class="text-lg font-bold underline hover:text-blue-400" href="#">Читать далее</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full flex justify-center py-40">
    <div class="flex gap-36">
      <div class="flex flex-col gap-14">
        <div class="flex flex-col gap-8">
          <h2 class="text-4xl font-bold">Оставайтесь на связи</h2>
          <p class="text-[#6C6C6C]">Свяжитесь с нами напрямую по телефону или заполните форму,<br/> чтобы получить бесплатную консультацию от нашего
            персонала.</p>
        </div>
        <div class="flex flex-col gap-5">
          <div class="flex flex-col gap-2">
            <div class="flex gap-3">
              <img src="./assets/images/icons/contacts/phone.svg" alt="phone">
              <span class="text-[#6C6C6C]">Номер телефона</span>
            </div>
            <div>
              <span class="text-2xl font-bold">+7 (495) 885 71 35</span>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex gap-3">
              <img src="./assets/images/icons/contacts/email.svg" alt="email">
              <span class="text-[#6C6C6C]">Email</span>
            </div>
            <div>
              <span class="font-bold">hello@cargopro.ru</span>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex gap-3">
              <img src="./assets/images/icons/contacts/place.svg" alt="place">
              <span class="text-[#6C6C6C]">Адрес</span>
            </div>
            <div>
              <span class="font-bold">ТЦ АВИАПАРК, 1 ЭТАЖ</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-14 pt-10">
        <div class="flex gap-2 items-center">
          <img src="./assets/images/icons/contacts/package.svg" alt="package">
          <h3 class="font-bold text-xl">Напишите нам</h3>
        </div>
        <form class="form flex flex-col gap-8">
          <input class="outline-none border-b border-gray-400" placeholder="Полное имя" type="text">
          <input class="outline-none border-b border-gray-400" placeholder="Номер телефона" type="text">
          <input class="outline-none border-b border-gray-400" placeholder="Email адрес" type="text">
          <textarea class="h-16 mb-4 outline-none resize-none border-b border-gray-400" placeholder="Сообщение" />
          <div>
            <Button button-classes="flex items-center gap-3">
              <img src="./assets/images/icons/send.svg" alt="">
              <span>Отправить</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<style>
.back {
  background-image: url("./assets/delivered-directly-to-her-door.png");
  background-color: rgba(82, 82, 82, 0.5);
  background-blend-mode: multiply;
  height: 768px;
}

.logistic {
  width: 1290px;
  height: 606px;
}

.transport {
  flex-basis: 42%;
  background-color: #181818;
}

.transport-container {
  height: 703px;
}

.man-on-railway {
  flex-basis: 58%;
  height: 703px;
  background-repeat: no-repeat;
}

.review {
  width: 602px;
  height: 504px;
}

.form {
  width: 420px;
}
</style>