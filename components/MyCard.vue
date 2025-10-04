<template>
    <div class="card">
        <div class="card__content">
            <img :src="item.img" class="card__bg-image" alt="">               
            <div class="card__bg-shadow"></div>        
            <div class="card__text-container">
                <h3 class="card__text">{{ item.title }}</h3>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

interface Props {
  item: {
    title: string,
    img: string
  }
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.card {
  @apply hover:scale-105 transition-all;


  &__content {
    @apply relative overflow-hidden rounded-2xl border-b-4 border-brand-orange;
  }

  &__bg-image {
    @apply w-full h-full object-cover;
  }

  &__bg-shadow {
    @apply absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black via-black/70 to-transparent;
  }

  &__text-container {
    @apply absolute inset-0 flex items-end justify-center pb-6;
  }

  &__text {
    @apply text-brand-yellow text-2xl phone:font-bold drop-shadow-lg text-center max-sm:text-base;
  }

}
</style>