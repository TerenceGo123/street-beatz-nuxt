<template>
  <div>
    <nav class="nav">
      <button class="hamburger group" @click="toggleMenu($event)">
        <div class="hamburger__container ">
          <div class="hamburger__content ">
            <div class="hamburger__span group-[.active]:rotate-[42deg] origin-left "></div>
            <div class="hamburger__span !w-1/2 group-[.active]:-translate-x-10"></div>
            <div class="hamburger__span group-[.active]:-rotate-[42deg] origin-left "></div>
          </div>
        </div>
      </button>
      <ul class="nav__ul max-sm:opacity-0 " >
        <li><NuxtLink @click="slideTo('about')">О НАС</NuxtLink></li>
        <li><NuxtLink @click="slideTo('events')">МЕРОПРИЯТИЯ</NuxtLink></li>
        <li><NuxtImg src="/favicon.ico" alt="street beatz logo" class="mx-auto max-sm:hidden"/></li>
        <li><NuxtLink @click="slideTo('why-we')">ПОЧЕМУ МЫ</NuxtLink></li>
        <li><NuxtLink @click="slideTo('video')">ВИДЕО</NuxtLink></li>
      </ul>
    </nav>
    <header class="header ">
        <div class="header__content">
          <h1 class="header__title">ШОУ<br>БАРАБАНЩИКОВ</h1>
          <NuxtLink @click="slideTo('form')"><MyButton :type="'button'">ОСТАВИТЬ ЗАЯВКУ</MyButton></NuxtLink>
        </div>
    </header>
    <main>
      <div class="w-full mx-auto">

        <!-- ABOUT SECTION  -->

        <section class="about-section" id="about">
            <MyTitle>О НАС</MyTitle>
            <div class="about-section__content" >
                <div class="about-section__text">
                  <div>
                    <NuxtImg class=" about-section__logo" src="/images/logo.png" alt="Логотип Шоу Барабанщиков Street Beatz"/>
                    <h4 class="about-section__title" >Шоу Барабанщиков Street Beatz</h4><br>
                    <p class="about-section__description" >Наше шоу барабанщиков – это уникальное сочетание динамичных перформансов, невероятной музыкальной энергии и визуального искусства.</p>
                  </div>
                </div>
                <div class="w-1/2 max-md:hidden">
                  <div class="relative pb-[80%]">
                    <NuxtImg
                      src="/images/photos/photo1.webp"
                      class="w-[40%] absolute top-[0%]  left-[25%] rounded-lg max-lg:left-[20%]"
                      loading="lazy"
                    />
                    <NuxtImg
                      src="/images/photos/photo2.webp"
                      class="w-[50%] absolute top-[47%] -left-[5%] rounded-lg max-lg:left-[-10%]"
                      loading="lazy"

                    />
                    <NuxtImg
                      src="/images/photos/photo3.webp"
                      class="w-[50%] absolute top-[52%] left-[50%] rounded-lg max-lg:left-[45%]"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div class="about-section__carousel">
                    <div v-for="(slide, index) in slides" class="inset-0 w-full mx-auto" :class="slide.relative ? 'relative' : 'absolute'">
                      <NuxtImg :src="slide.src" :alt="slide.alt" class="about-section__carousel-item" :class="currentSlide == index ? 'opacity-100' : 'opacity-0'" loading="lazy"/>
                    </div>
                </div>
            </div>
          </section>

        <!-- EVENT SECTION  -->

          <section class="event-section" id="events">
            <MyTitle>МЕРОПРИЯТИЯ</MyTitle>
            <div class="event-section__list-cards">
              <MyCard v-for="item in cards" :key="item.id" :item="item"/>
            </div>
          </section>

        <!-- WHY-WE SECTION  -->

          <section class="why-we-section" id="why-we">
            <MyTitle>ПОЧЕМУ МЫ?</MyTitle>
            <div class="why-we-section__list-container max-sm:mb-5">
              <ul class="why-we-section__ul">
                <li v-for="item in whyWeItems" :key="item">
                  <div class="why-we-section__text-contaner">
                    <p class="font-bold">{{ item }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

        <!-- VIDEO SECTION  -->

          <section class="video-section" id="video">
            <MyTitle>ВИДЕО</MyTitle>
            <div class="video-section__container ">

              <iframe :src="videoLinks[currentVideo]" class="video-section__video" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>

              <div class="video-section__arrow-content">
                <div class="video-section__arrow-container group" @click="changeVideo('prev')">
                  <div class="video-section__arrow video-section__arrow-left"></div>
                </div>
                <div class="video-section__arrow-container group" @click="changeVideo('next')">
                  <div class="video-section__arrow video-section__arrow-right "></div>
                </div>
              </div>
            </div>
          </section>

        <!-- FORM SECTION  -->

          <section class="form-section" id="form">
            <div>
              <div class="form-section__content">
                <div class="form-section__logo">
                  <img src="/favicon.ico" alt="street beatz logo">
                </div>
                <MyForm v-if="!formStore.formIsSubmit"/>
                <div v-if="formStore.formIsSubmit" class="form-section__submit-container ">
                  <div class="form-section__submit-checkmark ">
                    <div class="form-section__submit-checkmark-circle"></div>
                    <svg class="form-section__submit-checkmark-tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                      <path d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                    </svg>
                  </div>
                  <p class="form-section__submit-success-text success-anim ">Заявка успешно отправлена!</p>
                  <MyButton
                    @click="formStore.resetForm"
                    class="success-anim opacity-0 translate-y-5"
                    :type="'button'"
                  >
                    Отправить ещё
                  </MyButton>
              </div>
              </div>
            </div>
          </section>

        <!-- FOOTER  -->

          <footer class="footer">
            <NuxtImg src="/favicon.ico" alt="street beatz logo" class="sm:mr-14"/>
            <div class="footer__contacts ">
              <ul class=" footer__contacts-list ">
                <li>КОНТАКТЫ</li>
                <li><a href="tel:+79054954125">+7 905 495 41 25</a></li>
                <li><a href="">mail@mail.com</a></li>
              </ul>
              <div class="footer__contacts-socials ">
                <a href="https://vk.com/streetbeatz_drumshow"><NuxtImg src="/icons/VkIco.svg" alt="vk street beatz" class="w-8 h-8 mr-2"/></a>
                <a href="https://wa.me/79054954125"><NuxtImg src="/icons/whatsAppIco.svg" alt="whatsapp street beatz" class="w-8 h-8"/></a>
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
  ogTitle: 'STREET BEATZ',
  ogDescription: 'Наше шоу барабанщиков – это уникальное сочетание динамичных перформансов, невероятной музыкальной энергии и визуального искусства',
})


const formStore = useFormStore()

const slides = ref([
  { src: '/images/photos/photo2.webp', alt: 'Photo 2', relative: true },
  { src: '/images/photos/photo3.webp', alt: 'Photo 3' },
  { src: '/images/photos/photo4.webp', alt: 'Photo 4' }
])


const cards = [
  {
    id: 1,
    title: 'СВАДЬБА',
    img: '/images/cards/first-card.webp'
  },
    {
    id: 2,
    title: 'КОРПОРАТИВ',
    img: '/images/cards/second-card.webp'
  },
  {
    id: 3,
    title: 'ФЕСТИВАЛЬ',
    img: '/images/cards/third-card.webp'
  },
    {
    id: 4,
    title: 'ДЕНЬ РОЖДЕНИЯ',
    img: '/images/cards/fourth-card.webp'
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


const currentSlide = ref(0)

const videoLinks = ref<string[]>(["https://vk.com/video_ext.php?oid=-149015027&id=456239031&hd=2&autoplay=1", "https://vkvideo.ru/video_ext.php?oid=73938041&id=456239818&hd=2&autoplay=1"])
const currentVideo = ref(0)

const slideTo = (id:string) => {
  const element = document.getElementById(id)
  if(element != null) {
    const yPosition: number = element.offsetTop
    window.scrollTo({top: yPosition, behavior: 'smooth'})
  }
}

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

const toggleMenu = (el: Event) => {
  const menu = document.querySelector(".nav__ul")
  const button = el.currentTarget as HTMLElement
  if(menu != null) {
    menu.classList.toggle('max-sm:opacity-100')
    button.classList.toggle('active')
  }
}



onMounted(() => {
  intervalId = setInterval(nextSlide, 3000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})

</script>

<style lang="scss">

.nav {
  @apply max-sm:bg-black w-full relative;

  &__ul {
    @apply flex justify-around items-center bg-black text-white py-2 text-2xl max-sm:flex-col max-sm:items-start max-sm:pl-2 max-sm:text-xl  max-sm:w-full max-sm:absolute top-[50px] transform transition-all;
    
    li :not(img) {
      @apply  hover:text-brand-orange  transition-all cursor-pointer
    }
  }
  
}


.hamburger {
  @apply relative sm:hidden;

  

  &__container {
    @apply relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all shadow-md;
  }

  &__content {
    @apply flex flex-col justify-between w-[20px] h-[20px] transform transition-all  origin-center overflow-hidden
  };

  &__span {
    @apply bg-white h-[2px] w-7 transform transition-all 
  }

}


.header {
  @apply w-full h-screen max-sm:h-[80vh] bg-[image:linear-gradient(to_top,rgba(0,0,0,1.0),transparent_100%),url('/images/main-image.webp')] bg-cover  bg-top;

  &__content {
    @apply flex flex-col justify-end items-center h-full pb-28 max-sm:p-12;
  }

  &__title {
    @apply text-white text-8xl max-lg:text-5xl max-sm:text-4xl max-phone:text-3xl font-bold text-center mb-6;
  }
}


main {
  @apply bg-black px-14 max-lg:px-8 max-sm:px-4
}

.about-section {

  &__content {
    @apply flex justify-between  max-md:flex-col max-md:items-center;
  }

  &__text {
    @apply w-1/3 flex items-center text-center max-xl:text-start max-xl:w-2/5 max-lg:text-start max-md:w-full max-md:mb-5;
  }

  &__logo {
    @apply w-3/4 mb-16  max-lg:w-1/4  max-lg:mb-4 lg:m-auto max-sm:mb-2 max-sm:m-auto;
  }

  &__title {
    @apply text-brand-orange text-2xl max-lg:text-xl max-sm:text-left max-sm:w-full;
  }

  &__description {
    @apply text-2xl max-lg:text-xl max-sm:text-left text-white max-sm:w-full;
  }

  &__carousel {
    @apply hidden relative w-full max-md:block;

    &-item {
      @apply rounded-xl;
      transition: opacity 0.7s ease-in-out;
    }
  }
}


.event-section {
  &__list-cards {
    @apply grid grid-cols-4 gap-8 row-auto max-lg:grid-cols-2 max-lg:gap-5 max-md:gap-4;
  }
}


.why-we-section {
  &__ul {
    @apply text-brand-darkGray text-3xl max-lg:text-2xl  max-sm:text-xl;

    li:not(:last-child) {
      @apply mb-5;
    }
  }

  &__list-container {
    @apply  w-3/5 mx-auto max-2xl:w-4/5 max-phone:w-full;
  }

  &__text-contaner {
    @apply bg-brand-yellow px-6 py-2 rounded-lg max-sm:px-2 max-sm:py-1;
  }
}


.video-section {
  @apply  mb-12;

  &__container {
    @apply flex flex-col items-center;
  }

  &__video {
    @apply transition-all rounded-xl w-[1280px] h-[720px]  max-xl:w-[800px] max-xl:h-[450px] max-md:w-full max-md:h-[390px] max-phone:h-[214px] shadow-brand-orange shadow-2xl mb-14;
  }

  &__arrow-content {
    @apply flex justify-between w-[1280px] max-xl:w-[800px] max-md:w-full;
  }

  &__arrow-container {
    @apply h-16 w-2/5 bg-gray-500/5 flex justify-center items-center rounded-lg hover:bg-gray-500/65 transition-all max-lg:h-10 max-lg:w-1/4 cursor-pointer
  } 

  &__arrow {
    @apply w-[30px] h-[30px] border-2 border-gray-700 border-t-0 border-l-0 group-hover:border-white transition-all max-lg:w-[20px] max-lg:h-[20px] max-sm:w-[15px] max-sm:h-[15px];

    &-right {
      @apply -rotate-45;
    }

    &-left {
      @apply rotate-[135deg];
    }
  }
}



.form-section {
  @apply pt-12 mb-5;

  &__content {
    @apply w-3/4 flex justify-center flex-col mx-auto max-lg:w-full;
  }

  &__logo {
    @apply flex justify-center;
  }

  &__submit-container {
    @apply flex flex-col items-center justify-center p-8 text-center h-[500px];
  }

  &__submit-checkmark {
    @apply w-32 h-32 mb-8 relative;

    &-circle {
      @apply w-full h-full rounded-full bg-brand-yellow  opacity-0 scale-0 shadow-lg shadow-brand-orange;
      animation: circle-anim 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      animation-delay: 0.3s;
    }

    &-tick {
      @apply absolute top-0 left-0 w-full h-full;
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
  }

  &__submit-success-text {
    @apply text-white text-2xl mb-6 opacity-0 translate-y-5;
  }
}

.success-anim {
  animation: text-anim 0.5s ease forwards;
  animation-delay: 1.8s;
}

.footer {
  @apply h-56 flex justify-center max-sm:justify-around items-center;

  &__contacts {
    @apply flex flex-col items-center;

    &-list {
      @apply mb-2 text-white text-xl;

      li {
        @apply mb-2;
      }
    }

    &-socials {
      @apply flex justify-start w-full;
    }
  }
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
