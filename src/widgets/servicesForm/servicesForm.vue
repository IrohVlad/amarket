<template>
    <section class="relative">
        <div class="_container flex items-center justify-between h-[858px] relative z-10">
            <div class="max-w-[50%]">
                <div class=" text-[44px] font-bold mb-9">Оставайтесь на связи</div>
                <div class="text-[#6C6C6C] mb-[75px]">Свяжитесь с нами напрямую по телефону или заполните форму, чтобы получить бесплатную консультацию от нашего персонала.</div>
                <div class=" mb-7">
                    <div class="flex items-center mb-3">
                        <div class="mr-4">
                            <div><img src="./assets/tel.svg" alt=""></div>
                        </div>
                        <div class="text-[#6C6C6C] text-lg text-semibold">Номер телефона</div>
                    </div>
                    <div class=" font-bold text-[28px]">
                        (999) 555-01-03
                    </div>
                </div>
                <div class=" mb-7">
                    <div class="flex items-center mb-3">
                        <div class="mr-4">
                            <div><img src="./assets/mail.svg" alt=""></div>
                        </div>
                        <div class="text-[#6C6C6C] text-lg text-semibold">Email</div>
                    </div>
                    <div class=" font-semibold text-[18px]">
                        hello@cargopro.md
                    </div>
                </div>
                <div>
                    <div class="flex items-center mb-3">
                        <div class="mr-4">
                            <div><img src="./assets/point.svg" alt=""></div>
                        </div>
                        <div class="text-[#6C6C6C] text-lg text-semibold">Адрес</div>
                    </div>
                    <div class=" font-semibold text-[18px]">
                        ТРЦ АВИАПАРК, 1 ЭТАЖ
                    </div>
                </div>
            </div>
            <div>
                <div class="flex items-center mb-[60px]">
                    <div class="mr-3"><img src="./assets/mail2.svg" alt=""></div>
                    <div class="font-bold text-[22px]">Напишите нам</div>
                </div>
                <form class="w-[520px]" action="">
                        <div class="mb-9"><input class="w-full bg-inherit focus:outline-none border-b border-[#696969] h-[27px]" type="text" placeholder="Полное имя"></div>
                        <div class="mb-9"><input class="w-full bg-inherit focus:outline-none border-b border-[#696969] h-[27px]" type="text" placeholder="Номер телефона"></div>
                        <div class="mb-9"><input class="w-full bg-inherit focus:outline-none border-b border-[#696969] h-[27px]" type="text" placeholder="Email адрес"></div>
                        <div class="mb-[60px]"><input class="w-full bg-inherit focus:outline-none border-b border-[#696969] h-[79px]" type="text" placeholder="Сообщение"></div>
                        <Button :rounded="true"><div class="flex font-semibold text-white"><img class="mr-3" src="./assets/send.svg" alt=""> Отправить</div></Button>
                </form>
            </div>
        </div>
        <div class="absolute top-0 right-0 w-[50%] h-full bg-[#F8F8F8] bg-opacity-60">
        </div>
    </section>
</template>

<script setup>
import Button from '../../shared/button/button.vue';
</script>