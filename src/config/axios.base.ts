import axios from "axios";
import { getToken } from "../services/auth";

// const { BASE_URL } = import.meta.env

export const api = () => {
  const instanceAxios = axios.create({
    baseURL: "https://api.ibigboss.click/api", //"http://localhost:5000/api"
    headers: {
      "Content-type": "application/json"
    }
  })

  instanceAxios.interceptors.request.use(async config => {
    const token = getToken()
    if(token && config.headers) config.headers.Authorization = `Bearer ${token}`
    return config
  })

  return instanceAxios
}
