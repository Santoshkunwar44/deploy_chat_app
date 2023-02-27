import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "https://test-8jko.onrender.com/api",
    withCredentials: true
})
export default axiosInstance