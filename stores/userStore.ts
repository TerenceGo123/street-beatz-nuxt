import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useFormStore = defineStore('form', () => {

    const formIsSubmit = ref(false)
    const formInfo = ref({
        access_key: "61559fd2-3e2e-4b3b-aef3-0c2cfd3267d8",
        name: "",
        number: "",
        date: "",
        city: "",
        comment: ""
    })
    

    
    const result = ref("");
    const status = ref("");

    const submitForm = async () => {
    result.value = "Please wait...";
    console.log('SUCCESS');
    formIsSubmit.value = true
    
    // try {
    //     const response: any = await $fetch('https://api.web3forms.com/submit', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: formInfo.value,
    //     });

    //     console.log(response); // You can remove this line if you don't need it

    //     result.value = response.message;

    //     if (response.status === 200) {
    //     status.value = "success";
    //     formIsSubmit.value = true
    //     } else {
    //     console.log(response); // Log for debugging, can be removed
    //     status.value = "error";
    //     }
    //     } 
    //     catch (error) {
    //         console.log(error); // Log for debugging, can be removed
    //         status.value = "error";
    //         result.value = "Something went wrong!";
    //     } 
    //     finally {
    //         // Reset form after submission
    //         formInfo.value.name = "";
    //         formInfo.value.number = "";
    //         formInfo.value.date = "";
    //         formInfo.value.city = "";
    //         formInfo.value.comment = "";



    //         // Clear result and status after 5 seconds
    //         setTimeout(() => {
    //             result.value = "";
    //             status.value = "";
    //             }, 5000);
    //         }
        };



    const resetForm = () => {
        formIsSubmit.value = false
    }

    return {
        formInfo, formIsSubmit, submitForm, resetForm
    }


})