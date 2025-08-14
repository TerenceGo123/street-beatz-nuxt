<template>
    <div class=" hover:scale-105 transition-all">
        <div class="relative overflow-hidden rounded-2xl border-b-4 border-brand-orange">
            <img :src="item.img" class="w-full h-full object-cover" alt="">               
            <div class="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black/90 to-black/0"></div>        
            <div class="absolute inset-0 flex items-end justify-center pb-6">
                <h3 class="text-brand-yellow text-4xl play-bold drop-shadow-lg text-center">{{ item.title }}</h3>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface EventItem {
  title: string
  img: string
}

interface Props {
  item: EventItem
}

const props = defineProps<Props>()
</script>

<style scoped>

</style>