<template>
  <div>
    <nav class="max-sm:bg-black w-full relative">
      <button class="relative group sm:hidden" onclick="this.classList.toggle('active')" @click="toggleMenu">
        <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200 shadow-md">
          <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-[.active]:rotate-[42deg]"></div>
            <div class="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-[.active]:-translate-x-10"></div>
            <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-[.active]:-rotate-[42deg]"></div>
          </div>  
        </div>
      </button>
      <ul class="nav-ul flex justify-around items-center bg-black text-white py-2 text-2xl nav-menu max-sm:flex-col max-sm:items-start max-sm:pl-2 max-sm:text-xl max-sm:opacity-0 max-sm:w-full max-sm:absolute top-[50px] transform transition-all duration-300" >
        <li><a href="#about">О НАС</a></li>
        <li><a href="#events">МЕРОПРИЯТИЯ</a></li>
        <li class="max-sm:order-first"><img src="/favicon.png" alt="street beatz logo" class=" mx-auto max-sm:hidden"></li>
        <li><a href="#why we">ПОЧЕМУ МЫ?</a></li>
        <li><a href="#team">КОМАНДА</a></li>
      </ul>
    </nav> 
    <header class="w-full h-screen max-sm:h-[80vh] bg-[image:linear-gradient(to_top,rgba(0,0,0,1.0),transparent_100%),url('/main-image.jpg')] bg-cover  bg-top">
        <div class="flex flex-col justify-end items-center h-full pb-28 max-sm:p-12">
          <h1 class=" text-white text-8xl max-lg:text-5xl max-sm:text-4xl play-bold text-center mb-6" >ШОУ<br>БАРАБАНЩИКОВ</h1>
          <a href="#form"><MyButton :type="'button'">ОСТАВИТЬ ЗАЯВКУ</MyButton></a>
        </div>
    </header>
    <main class=" bg-black px-14 max-lg:px-8 max-sm:px-4" >
      <div class="container mx-auto">
        <section class="about-section h-max" id="about">
            <MyTitle>О НАС</MyTitle>
            <div class=" flex justify-between  max-sm:flex-col max-sm:items-center " >
                <div class="w-1/3 text-center max-xl:w-2/4 max-lg:text-start max-sm:w-full max-sm:mb-5 ">
                    <NuxtImg class=" w-3/4 mb-16 max-lg:w-1/4  max-lg:mb-4 lg:m-auto max-sm:mb-2 max-sm:m-auto" src="/logo.png" alt="Логотип Шоу Барабанщиков Street Beatz"/>
                    <h4 class=" text-brand-orange text-2xl max-lg:text-xl max-sm:text-left max-sm:w-full " >Шоу Барабанщиков Street Beatz</h4><br>
                    <p class="text-2xl max-lg:text-xl max-sm:text-left text-white max-sm:w-full" >Наше шоу барабанщиков – это уникальное сочетание динамичных перформансов, невероятной музыкальной энергии и визуального искусства.</p>
                </div> 
                <div class="w-1/2 max-sm:w-full">
                  <div class="relative pb-[80%] max-sm:pb-0"> <!-- Подберите нужный процент под вашу композицию -->
                    <!-- Фото 1 -->
                    <NuxtImg 
                      src="/photo1.jpg" 
                      class="w-[40%] absolute top-[0%]  left-[25%] rounded-lg max-lg:left-[45%] max-sm:w-4/5 max-sm:hidden"
                    /> 
                    <!-- Фото 2 -->
                    <NuxtImg 
                      src="/photo2.jpg" 
                      class="w-[50%] absolute top-[47%] -left-[5%] rounded-lg max-lg:left-[8%] max-sm:static max-sm:m-auto max-sm:w-full max-sm:mb-2"
                    />
                    
                    <!-- Фото 3 -->
                    <NuxtImg 
                      src="/photo3.jpeg" 
                      class="w-[50%] absolute top-[52%] left-[50%] rounded-lg max-lg:left-[63%] max-sm:static max-sm:m-auto max-sm:w-full max-sm:mb-2"
                    />

                    <NuxtImg 
                      src="/photo4.jpg" 
                      class="w-[50%] absolute top-[52%] left-[50%] rounded-lg sm:hidden max-sm:static max-sm:m-auto max-sm:w-full"
                    />
                  </div>
                </div>
            </div>  
          </section>
          <section class="event-section" id="events">
            <MyTitle>МЕРОПРИЯТИЯ</MyTitle>
            <div class="list-card grid grid-cols-4 max-lg:grid-cols-2 gap-8 row-auto">
              <MyCard v-for="item in cards" :key="item.id" :item="item"/>
            </div>
          </section>
          <section class="why-we-section" id="why we">
            <MyTitle>ПОЧЕМУ МЫ?</MyTitle>
            <div>
              <div class="flex justify-between items-center">
                <ul class="text-white text-2xl max-xl:text-xl list-disc list-inside w-1/2 max-lg:w-full ">
                  <li class="list__item">Самый <span class="text-brand-orange">зажигательный коллектив</span> Краснодарского края! </li>
                  <li class="list__item">Мы сделаем Ваше мероприятие шумным, <span class="text-brand-orange">ярким и фееричным!</span></li>
                  <li class="list__item"><span class="text-brand-orange">Проффесиональный</span> подход к делу!</li>
                </ul>
                <img src="/assets/images/t-short.png" alt="" class=" 2xl:w-2/4 xl:w-2/5 max-lg:hidden">  
              </div>
            </div>
          </section>
          <section class="team-section mb-12" id="team">
            <MyTitle>КОМАНДА</MyTitle> 
            <TeamMember :name="teamLeader.name" :img="teamLeader.img" class="mb-12" />
            <div class="grid grid-cols-3 max-sm:grid-cols-2 gap-y-12 place-content-center"> 
              <TeamMember v-for="mebmer in teamNames" :name="mebmer.name" :img="mebmer.img" />
            </div>
          </section>
          <section class="form-section pt-12 mb-5" id="form">
            <div class="flex justify-between items-center">
              <div class="w-2/4 flex justify-center flex-col max-lg:w-full">
                <div class="flex justify-center">
                  <img src="/favicon.png" alt="street beatz logo">
                </div>
                <MyForm v-if="!formStore.formIsSubmit"/>
                <div v-if="formStore.formIsSubmit" class="flex flex-col items-center justify-center p-8 text-center h-[534.8px]">
                  <div class="w-32 h-32 mb-8 relative">
                    <div class="circle w-full h-full rounded-full bg-brand-yellow  opacity-0 scale-0 shadow-lg shadow-brand-orange"></div>
                    <svg class="checkmark absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                      <path d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                    </svg>
                  </div>
                  <p class="success-text text-white text-2xl mb-6 opacity-0 translate-y-5">Заявка успешно отправлена!</p>
                  <MyButton 
                    @click="formStore.resetForm"
                    class="success-text opacity-0 translate-y-5"
                    :type="'button'"
                  >
                    Отправить ещё
                  </MyButton>
              </div>
              </div>
              <div class="w-2/5 max-lg:hidden">
                <img src="/assets/images/peopleImage.jpg" alt="" class=" rounded-3xl">
              </div>
            </div>
          </section>
          <footer class="h-56 flex justify-center max-sm:justify-around items-center">
            <img src="/favicon.png" alt="street beatz logo" class="sm:mr-14" >
            <div class="contacts flex flex-col items-center">
              <ul class="text-white text-xl contacts__list mb-2">
                <li>КОНТАКТЫ</li>
                <li><a href="tel:+79604837407">8 960 483 74 07</a></li>
                <li><a href="">mail@mail.com</a></li>
              </ul>
              <div class="contacts__socials flex justify-start w-full">
                <a href="https://vk.com/streetbeatz_drumshow"><img src="../assets/icons/VkIco.svg" alt="vk street beatz" class=" w-8 h-8 mr-2"></a>
                <a href="https://wa.me/79054954125"><img src="../assets/icons/whatsAppIco.svg" alt="whatsapp street beatz" class=" w-8 h-8"></a>
              </div>
            </div>
          </footer>
      </div>
    </main>
  </div>  
</template>
<script lang="ts" setup>
import { useFormStore } from '~/stores/formStore'

const formStore = useFormStore()

const teamLeader = {name: "Семён", img: '/team/Semen.jpg'} 
const teamNames = [  
  { name: "Лера", img: "/main-image.jpg" },
  { name: "Женя", img: "/team/Evgeniy.jpg" },
  { name: "Саня", img: "/team/Sanya.jpg" },
  { name: "Лиза", img: "/main-image.jpg" },
  { name: "Даша", img: "/main-image.jpg" },
  { name: "Лера", img: "/main-image.jpg" }
] 


const cards = [
  {
    id: 1,
    title: 'СВАДЬБА',
    img: '/first-card.png'
  },
    {
    id: 2,
    title: 'КОРПОРАТИВ',
    img: '/second-card.png'
  },
  {
    id: 3,
    title: 'ФЕСТИВАЛЬ',
    img: '/third-card.png'
  },
    {
    id: 4,
    title: 'ДЕНЬ РОЖДЕНИЯ',
    img: '/fourth-card.jpeg'
  }
] 


const toggleMenu = () => {
  const menu = document.querySelector(".nav-ul")
  if(menu != null) {
    menu.classList.toggle('max-sm:opacity-100')
  }
}



</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap');




* {
  font-family: "Play", sans-serif;
  font-weight: 400;
  font-style: normal; 
}
 
.play-bold {
  font-family: "Play", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.nav-menu li :not(img) {
  @apply  hover:border-b-4  hover:border-brand-orange transform transition-all box-border 
}

.list__item {
  @apply leading-[4rem] leading-8 max-sm:mb-4
}


 
.contacts__list li {
  @apply mb-2
}



.circle {
  animation: circle-anim 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  animation-delay: 0.3s;
}

.checkmark path {
  stroke: #fff;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: checkmark-anim 0.8s ease-in-out forwards;
  animation-delay: 1s;
}

.success-text {
  animation: text-anim 0.5s ease forwards;
  animation-delay: 1.8s;
}


@keyframes circle-anim {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes checkmark-anim {
  0% {
    stroke-dashoffset: 100;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes text-anim {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>