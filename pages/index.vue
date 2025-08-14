<template>
  <div>
    <nav>
      <ul class="flex justify-around items-center bg-black text-white py-2 text-2xl nav-menu " >
        <li><a href="">О НАС</a></li>
        <li><a href="">МЕРОПРИЯТИЯ</a></li>
        <li><a href=""><img src="/favicon.png" alt="street beatz logo" class="max-sm:w-1/2 mx-auto"></a></li>
        <li><a href="">ПОЧЕМУ МЫ?</a></li>
        <li><a href="">КОМАНДА</a></li>
      </ul>
    </nav>
    <header class="top-0 left-0 w-full h-screen max-sm:h-[90vh] bg-[image:linear-gradient(to_top,rgba(0,0,0,1.0),transparent_100%),url('/main-image.jpg')] bg-cover  bg-top">
        <div class="flex flex-col justify-end items-center h-full pb-28">
          <h1 class=" text-white text-8xl max-lg:text-5xl max-sm:text-4xl play-bold text-center mb-6" >ШОУ<br>БАРАБАНЩИКОВ</h1>
          <MyButton>ОСТАВИТЬ ЗАЯВКУ</MyButton>
        </div>
    </header>
    <main class=" bg-black px-14 max-sm:px-4" >
      <div class="container mx-auto ">
        <section class="about-section h-max">
            <MyTitle>О НАС</MyTitle>
            <div class=" flex justify-between max-xl:flex-col max-xl:items-center max-xl:justify-between  max-sm:flex-col max-sm:items-center " >
                <div class="w-1/3 max-xl:w-2/4 max-sm:w-full max-sm:mb-5">
                    <NuxtImg class=" w-3/4 text-center mb-16 sm:m-auto max-sm:mb-2 max-sm:w-1/4 max-sm:m-auto" src="/logo.png" alt="Логотип Шоу Барабанщиков Street Beatz"/>
                    <h4 class=" text-brand-orange text-2xl text-center max-sm:text-xl max-sm:text-left max-sm:w-full " >Шоу Барабанщиков Street Beatz</h4><br>
                    <p class="text-2xl text-center max-sm:text-xl max-sm:text-left text-white max-sm:w-full" >Наше шоу барабанщиков – это уникальное сочетание динамичных перформансов, невероятной музыкальной энергии и визуального искусства.</p>

                </div> 
                <div class="w-1/2 max-sm:w-full">
                  <div class="relative pb-[80%] max-sm:pb-0"> <!-- Подберите нужный процент под вашу композицию -->
                    <!-- Фото 1 -->
                    <NuxtImg 
                      src="/photo1.jpg" 
                      class="w-[40%] absolute top-[0%]  left-[25%] rounded-lg max-sm:w-4/5 max-sm:hidden"
                    /> 
                    <!-- Фото 2 -->
                    <NuxtImg 
                      src="/photo2.jpg" 
                      class="w-[50%] absolute top-[47%] -left-[5%] rounded-lg max-sm:static max-sm:m-auto max-sm:w-full max-sm:mb-2"
                    />
                    
                    <!-- Фото 3 -->
                    <NuxtImg 
                      src="/photo3.jpeg" 
                      class="w-[50%] absolute top-[52%] left-[50%] rounded-lg max-sm:static max-sm:m-auto max-sm:w-full max-sm:mb-2"
                    />

                    <NuxtImg 
                      src="/photo4.jpg" 
                      class="w-[50%] absolute top-[52%] left-[50%] rounded-lg max-sm:static max-sm:m-auto max-sm:w-full"
                    />
                  </div>
                </div>
            </div>  
          </section>
          <section class="event-section">
            <MyTitle>МЕРОПРИЯТИЯ</MyTitle>
            <div class="list-card grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8 row-auto">
              <MyCard v-for="item in cards" :key="item.id" :item="item"/>
            </div>
          </section>
          <section class="why-we-section">
            <MyTitle>ПОЧЕМУ МЫ?</MyTitle>
            <div>
              <div class="flex justify-between items-center">
                <ul class="text-white text-2xl list-disc list-inside w-1/2 max-sm:w-full ">
                  <li class="list__item">Самый <span class="text-brand-orange">зажигательный коллектив</span> Краснодарского края! </li>
                  <li class="list__item">Мы сделаем Ваше мероприятие шумным, <span class="text-brand-orange">ярким и фееричным!</span></li>
                  <li class="list__item"><span class="text-brand-orange">Проффесиональный</span> подход к делу!</li>
                </ul>
                <img src="/assets/images/t-short.png" alt="" class=" 2xl:w-2/4 xl:w-2/5 max-sm:hidden">  
              </div>
            </div>
          
          </section>
          <section class="team-section mb-12">
            <MyTitle>КОМАНДА</MyTitle> 
            <div class="grid grid-cols-4 max-sm:grid-cols-2 gap-y-12"> 
              <div class=" bg-brand-orange rounded-full 2xl:w-44 2xl:h-44  xl:w-36 xl:h-36  max-xl:w-36 max-xl:h-36 mx-auto"></div>
              <div class=" bg-brand-orange rounded-full 2xl:w-44 2xl:h-44  xl:w-36 xl:h-36  max-xl:w-36 max-xl:h-36 mx-auto"></div>
              <div class=" bg-brand-orange rounded-full 2xl:w-44 2xl:h-44  xl:w-36 xl:h-36  max-xl:w-36 max-xl:h-36 mx-auto"></div>
              <div class=" bg-brand-orange rounded-full 2xl:w-44 2xl:h-44  xl:w-36 xl:h-36  max-xl:w-36 max-xl:h-36 mx-auto"></div>
              <div class=" bg-brand-orange rounded-full 2xl:w-44 2xl:h-44  xl:w-36 xl:h-36  max-xl:w-36 max-xl:h-36 mx-auto"></div>
              <div class=" bg-brand-orange rounded-full 2xl:w-44 2xl:h-44  xl:w-36 xl:h-36  max-xl:w-36 max-xl:h-36 mx-auto"></div>
              <div class=" bg-brand-orange rounded-full 2xl:w-44 2xl:h-44  xl:w-36 xl:h-36  max-xl:w-36 max-xl:h-36 mx-auto"></div>
              <div class=" bg-brand-orange rounded-full 2xl:w-44 2xl:h-44  xl:w-36 xl:h-36  max-xl:w-36 max-xl:h-36 mx-auto"></div>
            </div>
          </section>
          <section class="form-section pt-12 mb-5" id="form">
            <div class="flex justify-between items-center">
              <div class="w-2/4 flex justify-center flex-col max-sm:w-full">
                <div class="flex justify-center">
                  <img src="/favicon.png" alt="street beatz logo">
                </div>
                <MyTitle>ОСТАВИТЬ ЗАЯВКУ</MyTitle>
                <form action="">
                  <label for="name" class="label-form">Имя</label>
                  <input type="text" name="name" placeholder="Введите имя..." class="input-form">
                  <label for="telephone" class="label-form">Телефон</label>
                  <input type="tel" name="telephone" placeholder="Введите телефон..." class="input-form">
                  <MyButton>ОСТАВИТЬ ЗАЯВКУ</MyButton>
                </form>
              </div>
              <div class="w-2/5 max-sm:hidden">
                <img src="/assets/images/peopleImage.jpg" alt="" class=" rounded-3xl">
              </div>
            </div>
          </section>
          <footer class="h-56">
            <hr>
            <ul class="text-white">
              <li><a href="tel:+79604837407">89604837407</a></li>
              <li><a href="">mail@mail.com</a></li>
            </ul>
          </footer>
      </div>
    </main>
  </div>  
</template>
<script lang="ts" setup>
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
  @apply  hover:border-b-4  hover:border-brand-orange  transition-all box-border max-sm:text-xs
}

.list__item {
  @apply leading-[4rem] max-xl:text-xl max-sm:mb-8
}

.input-form {
  @apply w-full p-4 rounded-xl text-xl border-black border-2 outline focus:border-brand-orange mb-8
}

.label-form {
 @apply text-white ml-2
}
 


</style>