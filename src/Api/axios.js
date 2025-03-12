import axios from "axios";
const axiosInstance = axios.create({
  baseURL:"http://127.0.0.1:5001/project-e-clone-8aa77/us-central1/api",
  // deoloy version of Amazone backend
  baseURL:"https://amazone-backend1-api.onrender.com"

});
export { axiosInstance };



