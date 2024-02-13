import { defineStore } from 'pinia'
import api from '@/services/api.js';


export const profile = defineStore('user', {
  state: () => ({
    user: {
        username: "",
        name: "",
        email: "",
        address: ""
    },
 }),

getters: {
    isLogged: (state) => !!state.user.username
},

actions: {
        async getProfile() {
            try {
                const res =  await api.get('/profile')
                console.log(res.data)
                    
                    if (res.data.code == 401) {
                        this.error = res.data.message
                        console.log(this.error)

                    } else if (res.data.statusCode == 200) {
                        this.user = res.data.data.username
                        console.log(this.user)
                        console.log(res.data.data.username)
                    }
            } catch (error) {
                console.log(error)
            }
        }
    }
})



