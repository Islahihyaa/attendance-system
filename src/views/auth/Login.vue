<template>
  <div class="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-600 to-green-700">
    <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-black">Login</h1>
      </div>

      <div v-if="general.error">
        <small class="bg-red-300 border border-red-400 text-red-700 px-2 py-1 rounded relative flex justify-center mb-3">{{ general.error.message }}</small>
      </div>
      
      <form class="space-y-4">

        <div :class="{error : v$.email.$errors}">
          <input
            type="text"
            placeholder="Email"
            v-model="form.email"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
              <div v-for="error of v$.email.$errors" :key="error.$uid">
                <small class="text-red-500">{{ error.$message }}</small>
              </div>                           
        </div>

        <div :class="{error : v$.password.$errors}">    
          <input
            type="password"
            placeholder="Password"
            v-model="form.password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
              <div v-for="error of v$.password.$errors" :key="error.$uid">
                <small class="text-red-500">{{ error.$message }}</small>
              </div>
        </div>       

        <button
        @click.prevent="login"
        class="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring"
        >Login
        </button>

        <p class="text-sm text-gray-500 mt-4">
          <RouterLink to="/forget-password" class="text-blue-500"> 
            Forget password
          </RouterLink>
        </p>  

      </form>
    </div>
  </div>
</template>


    
<script setup>
import { required, email } from '@vuelidate/validators';
import { reactive, computed, ref } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { useAuth } from '@/store/auth.js';  
import { useGenaral } from '@/store/general.store'

const auth = useAuth();

const general = useGenaral();
const error = general.error.message
console.log(error, "asdsd")

const form = reactive({
  email: '',
  password: '',
});

const rules = computed(() => {
  return {
    email: { required, email },
    password: { required },
  }
});

const v$ = useVuelidate(rules, form );

const login = async () => {

  v$.value.$validate();
  if (v$.value.$invalid) {
    return
  }

  const payload = {
    email: form.email,
    password: form.password
  };

  try {
     auth.login(payload)
     console.log(v$)

  } catch(error) {
   }


};
</script>

