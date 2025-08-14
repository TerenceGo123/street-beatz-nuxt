import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useUserStore = defineStore('user', () => {
    const id = ref(8) 

    return {
        id
    }
})