<template>
    <div class="flex justify-center items-center min-h-screen bg-gradient-to-r bg-slate-200">
        <div class="w-full max-w-md p-10 bg-white rounded-lg shadow-md">
            
            <div class="text-xl font-bold text-black mb-11">
                Hello, {{ user.user }}
            </div>

            <button 
            @click.prevent = "checkIn"
            class="w-full px-4 py-2 rounded-full border border-green-600 bg-green-800 text-white">
                Check In
            </button>

        </div>
    </div>
 </template>
 
 <script setup>

 import { profile } from '@/store/profile.js';
 import { onMounted } from "vue";

const user = profile()


onMounted (() => {
    userData()
})

const userData = () => {  
        try {
             user.getProfile() 
             console.log('user', user)

         } catch (error) {
             console.log('Error : ', error)
         }

 }
 </script>