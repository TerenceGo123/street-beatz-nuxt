<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div
      ref="box"
      class="w-[200px] h-[200px] bg-blue-800 rounded-lg cursor-pointer transition-all duration-300 ease-out"
      :style="transformStyle"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const box = ref<HTMLElement | null>(null)
const isHovering = ref(false)
const rotateX = ref(0)
const rotateY = ref(0)

const transformStyle = ref({
  transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
})

const handleMouseMove = (event: MouseEvent) => {
  if (!box.value) return
  
  isHovering.value = true
  const rect = box.value.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  
  const width = rect.width
  const height = rect.height
  
  // Вычисляем наклон based на позиции курсора
  rotateX.value = ((y / height) - 0.5) * 15 // -7.5 до 7.5 градусов
  rotateY.value = ((x / width) - 0.5) * -15 // -7.5 до 7.5 градусов
  
  transformStyle.value = {
    transform: `perspective(1000px) rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg)`,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
  }
}

const handleMouseLeave = () => {
  isHovering.value = false
  rotateX.value = 0
  rotateY.value = 0
  transformStyle.value = {
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
  }
}
</script>

<style scoped>
/* Дополнительные стили для плавности */

</style>