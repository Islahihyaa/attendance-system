import { defineStore } from "pinia";
import jwt_decode from "jwt-decode";
import api from "@/services/api.js";
import router from "@/router/index.js";

export const useAuth = defineStore("auth", {
  state: () => ({
    token: null,
    user: {
      username: "",
      name: "",
      email: "",
      address: "",
    },
  }),

  persist: true,

  getters: {
    isAuthenticated: (state) => !!state.token,
  },

  actions: {
    async login(payload) {
      await api.post("/login", payload).then((res) => {

        if(res.status == 200) {
            const { token } = res.data;
            const decoded = jwt_decode(token);
            this.token = token;
            this.user = decoded;
            console.log(res.status , "sadas")
            console.log(res,"asd")

            router.replace({ path: "/home" }).catch(() => {});
        } else if (res.status == 404) {
            console.log('user not found')
        }
      }).catch((error) => {
        return Promise.reject(error);
      })

    },
  },
});


