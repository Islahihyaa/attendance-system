<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-slate-200">
        <div class="text-center">
            <h1 class="text-2xl font-bold mb-6">Forgot your password?</h1>
            <h2 class="mb-9">Do not worry! We will help you recover your password.</h2>
        </div>
        <div class="items-center w-full max-w-md p-8  bg-white rounded-lg shadow-md">
            <h1 class="mb-5 text-center">Enter your email address to <br/> retrieve your password</h1>
            <form class="space-y-4 border rounded-full ">
                <input
                type="text"
                placeholder="Your email address"
                class="text-center w-full py-2 rounded-full focus:outline-none focus:ring focus:border-blue-500">
            </form>
            <button
            @click.prevent="sendLink"
            class="btn-xl w-full px-8 py-2 border rounded-full bg-green-600 text-white mt-6 hover:bg-green-700"
            >Submit</button>
        </div>
        
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const sendLink = () => {
  router.push({ path: '/reset-password' })
}
</script>
