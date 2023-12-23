<template>
    <div class=" sticky top-8 border-r border-black-200 mb-8">
                <div class="font-semibold text-[22px] border-b border-black-400 max-w-[252px] pb-4 mb-12" >Наши услуги</div>
                <nav class="mb-[66px]">
                    <ul class="max-w-[306px]">
                        <li><router-link active-class="before:!bg-[#495AB4] before:w-[3px] before:h-8 text-black" class="mb-6 text-xl text-[#6C6C6C] transition-colors duration-300 hover:text-black font-semibold flex items-center gap-6 before:bg-[#EBF1E4] before:w-[3px] before:h-8" to="auto">Автомобильные перевозки</router-link></li>
                        <li><router-link active-class="before:!bg-[#495AB4] before:w-[3px] before:h-8 text-black" class="mb-6 text-xl text-[#6C6C6C] transition-colors duration-300 hover:text-black font-semibold flex items-center gap-6 before:bg-[#EBF1E4] before:w-[3px] before:h-8" to="railway">Железнодорожные перевозки</router-link></li>
                        <li><router-link active-class="before:!bg-[#495AB4] before:w-[3px] before:h-8 text-black" class="mb-6 text-xl text-[#6C6C6C] transition-colors duration-300 hover:text-black font-semibold flex items-center gap-6 before:bg-[#EBF1E4] before:w-[3px] before:h-8" to="sea">Морские перевозки</router-link></li>
                        <li><router-link active-class="before:!bg-[#495AB4] before:w-[3px] before:h-8 text-black" class="mb-6 text-xl text-[#6C6C6C] transition-colors duration-300 hover:text-black font-semibold flex items-center gap-6 before:bg-[#EBF1E4] before:w-[3px] before:h-8" to="storage">Складские услуги</router-link></li>
                        <li><router-link active-class="before:!bg-[#495AB4] before:w-[3px] before:h-8 text-black" class="mb-6 text-xl text-[#6C6C6C] transition-colors duration-300 hover:text-black font-semibold flex items-center gap-6 before:bg-[#EBF1E4] before:w-[3px] before:h-8" to="customs">Таможенное оформление</router-link></li>
                    </ul>
                </nav>
                <div class="px-[29px] max-w-[306px]">
                    <div class=" text-[28px] font-bold mb-5">Нужна <br/> помощь?</div>
                    <Button><div class="text-white font-bold text-[18px] w-fit flex items-center"> <div class="mr-[10px]"><img src="./assets/call.svg" alt=""></div> <div>Связаться с нами</div></div></Button>
                </div>
    </div>
</template>

<script setup>
import Button from '../../shared/button/button.vue';
</script>