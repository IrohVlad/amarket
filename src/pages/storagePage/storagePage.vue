<template>
    <Header/>
    <main class=" font-raleway">
        <Hero :routes="['Главная', 'Услуги', 'Складские услуги']" :title="'Складские услуги'"><img class=" absolute top-0 left-0 w-[100%] h-[100%] object-center object-cover" src="./assets/young-warehouse-workers-working-together-2022-03-30-20-23-36-utc 2.png" alt=""></Hero>
        <div class="_container grid grid-cols-[345px_1fr] mt-[120px] relative">
        <div>
            <Sidebar/>
        </div>
        <div class="ml-[95px]">
                <div class=" text-[44px] font-bold max-w-[550px] mb-[40px]">Складские услуги</div>
                <Paragraph>С мировой сетью и современными объектами, наша служба складского хранения готова работать с вашей логистической цепью, будь то на начальном этапе или при доставке. Воспользовавшись нашими услугами по складированию и распределению, вы уменьшите сложность процессов и получите быстроту, контроль и видимость. Это также позволит вам снизить стоимость доставки.</Paragraph>
                <Slider>
                    <img class="h-[100%] w-[100%] object-cover" src="./assets/unsplash_CfKV0CecnU8.png" alt="">
                    <img class="h-[100%] w-[100%] object-cover" src="./assets/unsplash_CfKV0CecnU8.png" alt="">
                </Slider>
                <div class="mt-[52px]">
                    <div class="flex gap-8 items-center border-b border-black border-opacity-20 pb-[20px]">
                        <div class="w-[185px] min-w-[185px] flex items-center text-[20px] font-semibold before:mr-4 before:w-[10px] before:min-w-[10px] before:h-[10px] before:bg-[#495AB4] before:rounded-full">Расположение:</div>
                        <div class="text-[20px] font-semibold">Guangyuan (Guangzhou) Warehousing and Logistics Co., Ltd. ADDRESS:No. 29, Jinti Avenue, Timian Town, Huadu District, Guangzhou</div>
                    </div>
                    <div class="flex gap-8 items-center border-b border-black border-opacity-20 pb-[20px]">
                        <div class="w-[185px] min-w-[185px] flex items-center text-[20px] font-semibold before:mr-4 before:w-[10px] before:min-w-[10px] before:h-[10px] before:bg-[#495AB4] before:rounded-full">Соответствие :</div>
                        <div class="text-[20px] font-semibold">ISO9001:2008, FTZ, TS16949:2002, FDA Regulation</div>
                    </div>
                    <div class="flex gap-8 items-center border-b border-black border-opacity-20 pb-[20px]">
                        <div class="w-[185px] min-w-[185px] flex items-center text-[20px] font-semibold before:mr-4 before:w-[10px] before:min-w-[10px] before:h-[10px] before:bg-[#495AB4] before:rounded-full">Размеры :</div>
                        <div class="text-[20px] font-semibold">Length 250 M, Width 80 M, 12 Meter </div>
                    </div>
                    <div class="flex gap-8 items-center border-b border-black border-opacity-20 pb-[20px]">
                        <div class="w-[185px] min-w-[185px] flex items-center text-[20px] font-semibold before:mr-4 before:w-[10px] before:min-w-[10px] before:h-[10px] before:bg-[#495AB4] before:rounded-full">Уклон крыши:</div>
                        <div class="text-[20px] font-semibold">1:10</div>
                    </div>
                    <div class="flex gap-8 items-center">
                        <div class="w-[185px] min-w-[185px] flex items-center text-[20px] font-semibold before:mr-4 before:w-[10px] before:min-w-[10px] before:h-[10px] before:bg-[#495AB4] before:rounded-full">Крановые системы :</div>
                        <div class="text-[20px] font-semibold">Имеются</div>
                    </div>
                </div>
                <Paragraph>Многие из наших объектов идеально расположены вблизи ключевых морских портов основных транспортных маршрутов, что позволяет быстрее обрабатывать ваш груз. Мы предлагаем различные услуги в зависимости от происхождения вашего груза - мы можем напрямую перегружать или направлять грузы прямо в распределительный центр.</Paragraph>
                <Paragraph>В конце концов, мы комбинируем наши складские услуги с различными формами транспортировки: внутренние перевозки – дорожные, железнодорожные, морские и воздушные, чтобы обеспечить бесперебойное движение вашего груза.</Paragraph>
                <div class="font-bold text-[28px] mt-[80px]">
                    Что мы можем для вас сделать :
                </div>
                <div class="mt-[60px]">
                    <div class="flex mb-[40px]">
                        <div class="mr-4"><img src="./assets/icon1.svg" alt=""></div>
                        <div>
                            <div class="font-semibold text-[20px] max-w-[358px] mb-4">Адаптация под ваши потребности</div>
                            <div class="text-[#6C6C6C]">Мы можем адаптировать наши услуги в зависимости от объема товаров, который вы хотите хранить.</div>
                        </div>
                    </div>
                    <div class="flex mb-[40px]">
                        <div class="mr-4"><img src="./assets/icon2.svg" alt=""></div>
                        <div>
                            <div class="font-semibold text-[20px] max-w-[358px] mb-4">Сократите ваши расходы</div>
                            <div class="text-[#6C6C6C]">Вам не придется инвестировать в строительство и эксплуатацию частного склада.</div>
                        </div>
                    </div>
                    <div class="flex mb-[40px]">
                        <div class="mr-4"><img src="./assets/icon3.svg" alt=""></div>
                        <div>
                            <div class="font-semibold text-[20px] max-w-[358px] mb-4">Экономим ваше время</div>
                            <div class="text-[#6C6C6C]">Сокращение времени цикла - это преимущество, которое складская служба предоставляет бизнесу.</div>
                        </div>
                    </div>
                    <div class="flex mb-[40px]">
                        <div class="mr-4"><img src="./assets/icon4.svg" alt=""></div>
                        <div>
                            <div class="font-semibold text-[20px] max-w-[358px] mb-4">Повышение эффективности операций</div>
                            <div class="text-[#6C6C6C]">Складские услуги помогают снизить затраты и сэкономить ваше время.</div>
                        </div>
                    </div>
                </div>
                <div class="font-bold text-[28px] mt-[80px]">
                    Наши решения:
                </div>
                <div class="flex items-center justify-between gap-3 mt-[30px] mb-[38px]">
                    <div class="w-[263px] h-[221px] shadow-lg flex flex-col items-center justify-center px-[28px]">
                        <div><img class="mb-8" src="./assets/icon5.svg" alt=""></div>
                        <div class=" text-center text-[18px] font-medium">Краткосрочное хранение</div>
                    </div>
                    <div class="w-[263px] h-[221px] shadow-lg flex flex-col items-center justify-center px-[28px]">
                        <div><img class="mb-8" src="./assets/icon6.svg" alt=""></div>
                        <div class=" text-center text-[18px] font-medium">Совместное использование склада</div>
                    </div>
                    <div class="w-[263px] h-[221px] shadow-lg flex flex-col items-center justify-center px-[28px]">
                        <div><img class="mb-8" src="./assets/icon7.svg" alt=""></div>
                        <div class=" text-center text-[18px] font-medium">Аренда склада с самостоятельным управлением</div>
                    </div>
                </div>
                <Button :rounded="true" class="mb-[150px]" ><div class=" text-white w-fit font-semibold flex"> <img class="mr-3" src="./assets/download.svg" alt=""> Загрузить брошуру с нашими услугами</div></Button>
            </div>
    </div>
    <Trucks/>
    </main>
    <Footer/>
</template>

<script setup>
import Header from '../../widgets/header/header.vue'
import Hero from '../../widgets/hero/hero.vue';
import Sidebar from '../../features/servicesSidebar/servicesSidebar.vue';
import Trucks from '../../widgets/trucks/trucks.vue';
import Slider from '../../entities/slider/slider.vue'
import Footer from '../../widgets/footer/footer.vue'
import Paragraph from '../../shared/paragraph/paragraph.vue'
import Button from '../../shared/button/button.vue';
</script>