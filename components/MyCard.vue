<template>
    <div class=" hover:scale-105 transition-all">
        <div class="relative overflow-hidden rounded-2xl border-b-4 border-brand-orange">
            <img :src="item.img" class="w-full h-full object-cover" alt="">               
            <div class="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black via-black/70 to-transparent"></div>        
            <div class="absolute inset-0 flex items-end justify-center pb-6">
                <h3 class="text-brand-yellow text-2xl play-bold drop-shadow-lg text-center max-sm:text-base">{{ item.title }}</h3>
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

<style scoped>

</style>