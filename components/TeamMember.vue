<template>
    <div>
        <!-- <div class="team-member group" :style="{ backgroundImage: `url(${img})` }"> -->
        <div class="team-member group">
            <div class="black-bg-transparent"></div>
            <div class="team-name">
                {{ name }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
})
</script>

<style scoped>
.team-member {
  @apply relative overflow-hidden bg-brand-orange bg-cover bg-center rounded-full 2xl:w-44 2xl:h-44  xl:w-36 xl:h-36  max-xl:w-36 max-xl:h-36 max-sm:h-32 max-sm:w-32 mx-auto text-white
}

.black-bg-transparent {
  @apply opacity-0 group-hover:opacity-100 absolute inset-0 bg-gradient-to-t from-black/100 to-transparent transition-all
}

.team-name {
  @apply opacity-0 group-hover:opacity-100 text-3xl relative z-10 bottom-5 flex justify-center items-end h-full text-white transition-all
}
</style>