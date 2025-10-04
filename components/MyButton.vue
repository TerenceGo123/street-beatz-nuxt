<template>
    <div>
        <button :type=type class="my-button"><slot></slot></button>
    </div>
</template>

<script setup lang="ts">
interface Props {
    type: "button" | "submit" | "reset" | undefined
}
defineProps<Props>()
</script>

<style>
.my-button {
    @apply flex justify-center items-center bg-brand-yellow px-3 py-2 text-brand-darkGray text-4xl max-sm:text-xl font-bold rounded-2xl max-sm:rounded-xl w-full hover:bg-brand-orange hover:text-black transition-all;
}

</style>
