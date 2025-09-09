<template>
    <div class="">
        <MyTitle>ОСТАВИТЬ ЗАЯВКУ</MyTitle>
        <Form @submit="formStore.submitForm">
            <div>
                <label for="name" class="label-form" >Имя</label>
                <Field id="name" name="name" type="text" autocomplete="username" :rules="validateName" class="input-form" placeholder="Введите имя..."/>
                <ErrorMessage name="name" class="mt-1 text-sm text-red-600" />
            </div>
            <div>
                <label for="phone" class="label-form" >Телефон</label>
                <Field id="phone" name="phone" type="tel" autocomplete="tel" :rules="validatePhone" class="input-form" placeholder="+7 (999) 999-99-99"/>
                <ErrorMessage name="phone" class="mt-1 text-sm text-red-600" />
            </div>
            <div class="flex justify-between">
                <div class="w-2/5">
                    <label for="date" class="label-form" >Дата</label>
                    <Field id="date" name="date" type="date" autocomplete="date" :rules="validateDate" class="input-form"/>
                    <ErrorMessage name="date" class="mt-1 text-sm text-red-600" />
                </div>
                <div class="w-2/5">
                    <label for="city" class="label-form" >Город</label>
                    <Field id="city" name="city" type="city" autocomplete="city"  :rules="validateCity" class="input-form" placeholder="Введите город..."/>
                    <ErrorMessage name="city" class="mt-1 text-sm text-red-600" />
                </div>
            </div>
            <div class="mb-8">
                <label for="comment" class="label-form" >Комментарий</label>
                <Field id="comment" name="comment" type="comment" autocomplete="city" class="input-form" placeholder="Введите комментарий"/>
            </div>
            <div>
                <MyButton :type="'submit'" :disabled="formStore.formIsSubmit">
                    <span v-if="!formStore.formIsSubmit" class="play-bold" >ОТПРАВИТЬ</span>
                    <span v-else class="play-bold" >ОТПРАВКА...</span>
                </MyButton>
            </div>
        </Form>
    </div>
</template>


<script setup lang="ts">
import { useFormStore } from '~/stores/formStore'
const formStore = useFormStore()

const validateName = (value: string) => {
  if (!value) {
    return 'Логин обязателен для заполнения'
  }
  
  return true
}


const validatePhone = (value: string) => {
  if (!value) {
    return 'Номер телефона обязателен для заполнения'
  }
  
  // Простая проверка формата номера телефона
  const phoneRegex = /^(\+7|8)[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/
  if (!phoneRegex.test(value)) {
    return 'Введите корректный номер телефона'
  }
  
  return true
}

const validateCity = (value: string) => {
  if (!value) {
    return 'Обязательно'
  }
  
  return true
}

const  validateDate = (value: string) => {
    if(!value) {
        return 'Обязательно'
    }

    const selectDate = new Date(value)
    const today = new Date()
    today.setHours(0,0,0,0)
    if(selectDate < today) {
        return 'Выберите правильную дату'
    }

    return true 
}




</script>


<style scoped>


.input-form {
  @apply w-full p-4 rounded-xl text-xl border-black border-2 outline focus:border-brand-orange mb-1
}

.label-form {
 @apply text-white ml-2
}

</style>