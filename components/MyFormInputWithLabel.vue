<template>
    <div>
        <label :for="name" class="label-form">{{ label }}</label>
        <input :type="type" :name="name" :placeholder="placeholder" class="input-form">
    </div>
</template>

<script setup lang="ts">
interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  label: string;
}

defineProps<InputProps>();
</script>

<style scoped>
.input-form {
  @apply w-full p-4 rounded-xl text-xl border-black border-2 outline focus:border-brand-orange mb-8 max-sm:mb-4
}

.label-form {
 @apply text-white ml-2
}
</style>