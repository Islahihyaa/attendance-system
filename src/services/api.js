import axios from "axios";
import { useAuth } from '@/store/auth.js'
import { useGenaral } from "../store/general.store";


const instance = axios.create({
  baseURL: import.meta.VITE_APP_BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    const auth = useAuth();

    if (auth.isAuthenticated) {
      config.headers = { 
        Authorization: `Bearer ${auth.token}`,  
       }
     }
     return config
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => {
    return response
  },
  
  async (error) => {
    const general = useGenaral()
    general.error = error.response.data
    console.log("general error", general.error);
    throw error
  }
)

export default instance;




