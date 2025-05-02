import axios from "axios"

// Access the environment variable
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"; // Fallback to localhost if not set

const instance = axios.create({
  baseURL: BASE_URL,
})

export default instance
