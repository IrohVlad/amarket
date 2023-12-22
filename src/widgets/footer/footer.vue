<template>
    <footer class="bg-[#2B2B2B]">
        <div class="_container h-[439px] py-[41px] flex flex-col justify-between" >
            <div class="flex items-center justify-between">
                <div>
                    <div class="h-[30px] w-[50px] mb-2">
                        <img class="h-full w-full" src="./assets/logo.svg" alt="">
                    </div>
                    <div class=" mb-[29px] font-bold text-lg text-white">CARGO PRO</div>
                    <div class=" font-semibold text-lg text-white mb-1">Подпишитесь на рассылку</div>
                    <div class=" mb-4 font-medium text-[#D7D7D7] text-base">Мы будем отправлять вам полезную информаю раз в неделю</div>
                    <div class="flex">
                        <input class=" h-12 w-[280px] rounded-lg px-4 py-3 font-medium text-[16px] mr-4" type="text" placeholder="Ваш email">
                        <Button :rounded="true">
                            <div class=" font-semibold text-white text-base w-fit">Отправить</div>
                        </Button>
                    </div>
                </div>
                <div class="grid grid-cols-[1fr_1fr_1fr] gap-[100px]">
                    <div>
                        <div class="mb-4 text-white font-semibold text-sm">Компания</div>
                        <nav>
                            <ul>
                                <li class=" font-medium text-[#AFAFAF] mb-4">О нас</li>
                                <li class=" font-medium text-[#AFAFAF] mb-4">Карьера</li>
                                <li class=" font-medium text-[#AFAFAF] mb-4">Новости</li>
                                <li class=" font-medium text-[#AFAFAF]">Контакты</li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <div class="mb-4 text-white font-semibold text-sm">Компания</div>
                        <nav>
                            <ul>
                                <li class=" font-medium text-[#AFAFAF] mb-4">О нас</li>
                                <li class=" font-medium text-[#AFAFAF] mb-4">Карьера</li>
                                <li class=" font-medium text-[#AFAFAF] mb-4">Новости</li>
                                <li class=" font-medium text-[#AFAFAF]">Контакты</li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <div class="mb-4 text-white font-semibold text-sm">Компания</div>
                        <nav>
                            <ul>
                                <li class=" font-medium text-[#AFAFAF] mb-4">О нас</li>
                                <li class=" font-medium text-[#AFAFAF] mb-4">Карьера</li>
                                <li class=" font-medium text-[#AFAFAF] mb-4">Новости</li>
                                <li class=" font-medium text-[#AFAFAF]">Контакты</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="p-[20px] border-t border-[#7A7A7A] flex items-center justify-between">
                <div class="font-medium text-[#D7D7D7]">© 2023 CARGO PRO. Все права защищены.</div>
                <div>
                    <ul class="flex">
                        <li class="mr-6"><img src="./assets/tw.svg" alt=""></li>
                        <li class="mr-6"><img src="./assets/in.svg" alt=""></li>
                        <li><img src="./assets/f.svg" alt=""></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
    import Button from '../../shared/button/button.vue';
</script>