<template>
    <section class=" mt-[120px] pb-[120px] relative">
        <div class="_container relative z-20">
            <div class="flex items-center justify-between mb-[100px]">
                <div class=" font-bold text-[44px]">Что мы предлогаем</div>
                <div class=" text-[#6C6C6C] leading-[26px] max-w-[520px] font-open">Предоставляем высококачественные комплексные логистические услуги по транспортировке по минимальной стоимости.</div>
            </div>
            <div class="grid grid-cols-[1fr_1fr_1fr] grid-rows-[440px_440px] gap-x-[30px] gap-y-[40px] pb-[120px]">
                <router-link to="/services/railway" class="relative p-6 flex flex-col justify-end overflow-hidden bg-black">
                    <img class=" w-full h-full object-cover absolute top-0 left-0 z-0 transition-all duration-500 hover:scale-125 hover:opacity-50" src="./assets/cargo-truck-on-the-mountain-truck-on-road-cargo-2021-08-26-16-36-15-utc 1.png" alt="">
                    <div class="flex items-center relative z-10 font-bold text-white text-[22px] pb-3 border-b border-white border-opacity-50"> <div class=" mr-3"><img src="./assets/pre.svg" alt=""></div> Автомобильные перевозки</div>
                </router-link>
                <router-link to="/services/railway" class="relative p-6 flex flex-col justify-end overflow-hidden bg-black">
                    <img class=" w-full h-full object-cover absolute top-0 left-0 z-0 transition-all duration-500 hover:scale-125 hover:opacity-50" src="./assets/unsplash__VwkL9LVa-M.png" alt="">
                    <div class="flex items-center relative z-10 font-bold text-white text-[22px] pb-3 border-b border-white border-opacity-50"> <div class=" mr-3"><img src="./assets/pre.svg" alt=""></div> Железнодорожные перевозки</div>
                </router-link>
                <router-link to="/" class="relative p-6 flex flex-col justify-end overflow-hidden bg-black">
                    <img class=" w-full h-full object-cover absolute top-0 left-0 z-0 transition-all duration-500 hover:scale-125 hover:opacity-50" src="./assets/cargo-ship-floating-in-sea-2021-10-15-22-53-43-utc 1.png" alt="">
                    <div class="flex items-center relative z-10 font-bold text-white text-[22px] pb-3 border-b border-white border-opacity-50"> <div class=" mr-3"><img src="./assets/pre.svg" alt=""></div> Морские перевозки</div>
                </router-link>
                <router-link to="/services/storage" class="relative p-6 flex flex-col justify-end overflow-hidden bg-black">
                    <img class=" w-full h-full object-cover absolute top-0 left-0 z-0 transition-all duration-500 hover:scale-125 hover:opacity-50" src="./assets/unsplash_CfKV0CecnU8 (1).png" alt="">
                    <div class="flex items-center relative z-10 font-bold text-white text-[22px] pb-3 border-b border-white border-opacity-50"> <div class=" mr-3"><img src="./assets/pre.svg" alt=""></div> Складские услуги</div>
                </router-link>
                <router-link to="/services/customs" class="relative p-6 flex flex-col justify-end overflow-hidden bg-black">
                    <img class=" w-full h-full object-cover absolute top-0 left-0 z-0 transition-all duration-500 hover:scale-125 hover:opacity-50" src="./assets/unsplash_DEMrRuvJvqo (1).png" alt="">
                    <div class="flex items-center relative z-10 font-bold text-white text-[22px] pb-3 border-b border-white border-opacity-50"> <div class=" mr-3"><img src="./assets/pre.svg" alt=""></div> Таможенное оформление</div>
                </router-link>
            </div>
        </div>
        <div class=" bg-[#F8F8F8] h-[809px] absolute bottom-0 z-10 w-full"></div>
    </section>
</template>

<script setup>

</script>