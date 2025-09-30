<template>
  <div>
    <nav class="max-sm:bg-black w-full relative">
      <button class="relative group sm:hidden" @click="toggleMenu($event)">
        <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200 shadow-md">
          <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-[.active]:rotate-[42deg]"></div>
            <div class="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-[.active]:-translate-x-10"></div>
            <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-[.active]:-rotate-[42deg]"></div>
          </div>  
        </div>
      </button>
      <ul class="nav-ul flex justify-around items-center bg-black text-white py-2 text-2xl nav-menu max-sm:flex-col max-sm:items-start max-sm:pl-2 max-sm:text-xl max-sm:opacity-0 max-sm:w-full max-sm:absolute top-[50px] transform transition-all duration-300" >
        <li><a @click="slideTo('about')">О НАС</a></li>
        <li><a @click="slideTo('events')">МЕРОПРИЯТИЯ</a></li>
        <li class="max-sm:order-first"><NuxtImg src="/favicon.ico" alt="street beatz logo" class=" mx-auto max-sm:hidden"/></li>
        <li><a @click="slideTo('why we')">ПОЧЕМУ МЫ</a></li>
        <li><a @click="slideTo('video')">ВИДЕО</a></li>
      </ul>
    </nav> 
    <header class="w-full h-screen max-sm:h-[80vh] bg-[image:linear-gradient(to_top,rgba(0,0,0,1.0),transparent_100%),url('/images/main-image.jpg')] bg-cover  bg-top">
        <div class="flex flex-col justify-end items-center h-full pb-28 max-sm:p-12">
          <h1 class=" text-white text-8xl max-lg:text-5xl max-sm:text-4xl play-bold text-center mb-6" >ШОУ<br>БАРАБАНЩИКОВ</h1>
          <a @click="slideTo('form')"><MyButton :type="'button'">ОСТАВИТЬ ЗАЯВКУ</MyButton></a>
        </div>
    </header>
    <main class=" bg-black px-14 max-lg:px-8 max-sm:px-4" >
      <div class="w-full mx-auto">

        <!-- ABOUT SECTION  -->

        <section class="about-section h-max" id="about">
            <MyTitle>О НАС</MyTitle>
            <div class=" flex justify-between  max-md:flex-col max-md:items-center " >
                <div class="w-1/3 flex items-center text-center max-xl:text-start max-xl:w-2/5 max-lg:text-start max-md:w-full max-md:mb-5 ">
                  <div>
                    <NuxtImg class=" w-3/4 mb-16  max-lg:w-1/4  max-lg:mb-4 lg:m-auto max-sm:mb-2 max-sm:m-auto" src="/images/logo.png" alt="Логотип Шоу Барабанщиков Street Beatz"/>
                    <h4 class=" text-brand-orange text-2xl max-lg:text-xl max-sm:text-left max-sm:w-full " >Шоу Барабанщиков Street Beatz</h4><br>
                    <p class="text-2xl max-lg:text-xl max-sm:text-left text-white max-sm:w-full" >Наше шоу барабанщиков – это уникальное сочетание динамичных перформансов, невероятной музыкальной энергии и визуального искусства.</p>
                  </div>
                </div>
                <div class="w-1/2 max-md:hidden">
                  <div class="relative pb-[80%] max-sm:pb-0"> 
                    <NuxtImg 
                      src="/images/photos/photo1.jpg" 
                      class="w-[40%] absolute top-[0%]  left-[25%] rounded-lg max-lg:left-[20%] max-sm:w-4/5 max-sm:hidden"
                    /> 
                    <NuxtImg 
                      src="/images/photos/photo2.jpg" 
                      class="w-[50%] absolute top-[47%] -left-[5%] rounded-lg max-lg:left-[-10%] max-sm:static max-sm:m-auto max-sm:w-full max-sm:mb-2"
                    />
                    <NuxtImg 
                      src="/images/photos/photo3.jpeg" 
                      class="w-[50%] absolute top-[52%] left-[50%] rounded-lg max-lg:left-[45%] max-sm:static max-sm:m-auto max-sm:w-full max-sm:mb-2"
                    />
                  </div>
                </div>

                <div class="hidden relative w-full max-md:block">
                    <div v-for="(slide, index) in slides" class="inset-0 w-full mx-auto" :class="slide.relative ? 'relative' : 'absolute'">
                      <NuxtImg :src="slide.src" :alt="slide.alt" class="carousel-item rounded-xl z-10" :class="currentSlide == index ? 'opacity-100' : 'opacity-0'"/>
                    </div>
                </div>
            </div>  
          </section>

        <!-- EVENT SECTION  -->

          <section class="event-section" id="events">
            <MyTitle>МЕРОПРИЯТИЯ</MyTitle>
            <div class="list-card grid grid-cols-4 gap-8 row-auto max-lg:grid-cols-2 max-lg:gap-5 max-md:gap-4">
              <MyCard v-for="item in cards" :key="item.id" :item="item"/>
            </div>
          </section>

        <!-- WHY-WE SECTION  -->

          <section class="why-we-section" id="why we">
            <MyTitle>ПОЧЕМУ МЫ?</MyTitle>
            <div  class="why flex justify-between flex-col">
              <div class="why-list-container max-sm:mb-5">
                <ul class="why-list  ">
                  <li v-for="item in whyWeItems" :key="item">
                    <div>
                      <p >{{ item }}</p>
                    </div>
                  </li>  
                </ul>       
              </div>
            </div>
          </section>

        <!-- VIDEO SECTION  -->

          <section class="video-section mb-12" id="video">
            <MyTitle>ВИДЕО</MyTitle>
            <div class="flex flex-col items-center">

              <iframe :src="videoLinks[currentVideo]" class="video-frame transition-all w-[1280px] h-[720px]  max-xl:w-[800px] max-xl:h-[450px] max-md:w-full max-md:h-[390px] max-phone:h-[214px] shadow-brand-orange shadow-2xl mb-14" style="background-color: #000" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>

              <div class="flex justify-between w-[1280px] max-xl:w-[800px] max-md:w-full">
                <div class="arrow-container-sm group" @click="changeVideo('prev')">
                  <div class="arrow arrow-left"></div>
                </div>
                <div class="arrow-container-sm group" @click="changeVideo('next')">
                  <div class="arrow arrow-right "></div>
                </div>
              </div>
            </div>
          </section>

        <!-- FORM SECTION  -->

          <section class="form-section pt-12 mb-5" id="form">
            <div>
              <div class="w-3/4 flex justify-center flex-col mx-auto max-lg:w-full">
                <div class="flex justify-center">
                  <img src="/favicon.ico" alt="street beatz logo">
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
            </div>
          </section>

        <!-- FOOTER  -->

          <footer class="h-56 flex justify-center max-sm:justify-around items-center">
            <NuxtImg src="/favicon.ico" alt="street beatz logo" class="sm:mr-14"/>
            <div class="contacts flex flex-col items-center">
              <ul class="text-white text-xl contacts__list mb-2">
                <li>КОНТАКТЫ</li>
                <li><a href="tel:+79054954125">+7 905 495 41 25</a></li>
                <li><a href="">mail@mail.com</a></li>
              </ul>
              <div class="contacts__socials flex justify-start w-full">
                <a href="https://vk.com/streetbeatz_drumshow"><NuxtImg src="/icons/VkIco.svg" alt="vk street beatz" class=" w-8 h-8 mr-2"/></a>
                <a href="https://wa.me/79054954125"><NuxtImg src="/icons/whatsAppIco.svg" alt="whatsapp street beatz" class=" w-8 h-8"/></a>
              </div>
            </div>
          </footer>
      </div>
    </main>
  </div>  
</template>
<script lang="ts" setup>
import { useFormStore } from '~/stores/formStore'
import { ref, onMounted, onUnmounted } from 'vue'

useSeoMeta({
  title: 'STREET BEATZ',
  description: 'Наше шоу барабанщиков – это уникальное сочетание динамичных перформансов, невероятной музыкальной энергии и визуального искусства',
})


const formStore = useFormStore()

const cards = [
  {
    id: 1,
    title: 'СВАДЬБА',
    img: '/images/cards/first-card.png'
  },
    {
    id: 2,
    title: 'КОРПОРАТИВ',
    img: '/images/cards/second-card.png'
  },
  {
    id: 3,
    title: 'ФЕСТИВАЛЬ',
    img: '/images/cards/third-card.png'
  },
    {
    id: 4,
    title: 'ДЕНЬ РОЖДЕНИЯ',
    img: '/images/cards/fourth-card.jpeg'
  }
] 

const whyWeItems = ref<string[]>([
   "Самый зажигательный коллектив Краснодарского края!",
   "Мы сделаем Ваше мероприятие шумным, ярким и фееричным!",
   "Проффесиональный подход к делу!",
   "Самый зажигательный коллектив Краснодарского края!",
   "Мы сделаем Ваше мероприятие шумным, ярким и фееричным!",
   "Проффесиональный подход к делу!"
]) 

const slides = ref([
  { src: '/images/photos/photo2.jpg', alt: 'Photo 2', relative: true },
  { src: '/images/photos/photo3.jpeg', alt: 'Photo 3' },
  { src: '/images/photos/photo4.jpg', alt: 'Photo 4' }
])


const videoLinks = ref<string[]>(["https://vk.com/video_ext.php?oid=-149015027&id=456239031&hd=2&autoplay=1", "https://vkvideo.ru/video_ext.php?oid=73938041&id=456239818&hd=2&autoplay=1"])
const currentSlide = ref(0)
const currentVideo = ref(0)


const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const changeVideo = (direction: string) => {
  const frame = document.querySelector('.video-frame')
  frame?.classList.add('opacity-0')

  if (direction === 'next') {
    currentVideo.value = (currentVideo.value + 1) % videoLinks.value.length
  } else if (direction === 'prev') {
    currentVideo.value = (currentVideo.value - 1 + videoLinks.value.length) % videoLinks.value.length
  }

  setTimeout(() => {
    frame?.classList.remove('opacity-0')
  }, 2000)
}

let intervalId: any = null

onMounted(() => {
  intervalId = setInterval(nextSlide, 3000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})

const toggleMenu = (el: Event) => {
  const menu = document.querySelector(".nav-ul")
  const button = el.currentTarget as HTMLElement 
  if(menu != null) {
    menu.classList.toggle('max-sm:opacity-100')
    button.classList.toggle('active')
  }
}

const slideTo = (id:string) => {
  const element = document.getElementById(id)
  if(element != null) {
    const yPosition: number = element.offsetTop
    window.scrollTo({top: yPosition, behavior: 'smooth'})
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
  @apply  hover:border-b-4  hover:border-brand-orange transform transition-all box-border cursor-pointer 
}

.list__item {
  @apply leading-[4rem] leading-8 max-sm:mb-4
}


.why-list {
  @apply text-brand-darkGray text-3xl max-lg:text-2xl  max-sm:text-xl

}


.why-list {
  
  &-container {
    @apply  w-3/5 mx-auto max-2xl:w-4/5 max-phone:w-full
  }


  li {

    div {
      @apply bg-brand-yellow px-6 py-2 rounded-lg max-sm:px-2 max-sm:py-1
    }

    p {
      font-family: "Play", sans-serif;
      font-weight: 700;
      font-style: normal;
    }

    
  }

  li:not(:last-child) {
      @apply mb-5
    }
  
}


.arrow-container-sm {
  @apply h-16 w-2/5 bg-gray-500/5 flex justify-center items-center hover:bg-gray-500/65 transition-all duration-300 max-lg:h-10 max-lg:w-1/4 cursor-pointer
}

.arrow {
  @apply w-[30px] h-[30px] border-2 border-gray-700 border-t-0 border-l-0 group-hover:border-white transition-all duration-300 max-lg:w-[20px] max-lg:h-[20px] max-sm:w-[15px] max-sm:h-[15px]
}

.arrow-right {
  transform: rotate(-45deg);
}

.arrow-left {
  transform: rotate(135deg);
}

.carousel-item {
  transition: opacity 0.7s ease-in-out;
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
