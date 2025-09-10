<template>
    <div>
        <button :type=type class="flex justify-center items-center bg-brand-yellow px-3 py-2 text-brand-darkGray text-4xl max-sm:text-xl play-bold rounded-2xl w-full hover:bg-brand-orange transition-all delay-75 duration-300 "><slot></slot></button>
    </div>
</template>

<script setup lang="ts">
interface Props {
    type: "button" | "submit" | "reset" | undefined
}


defineProps<Props>()
</script>
