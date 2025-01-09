import axios from "axios";

export const axiosApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "146f9a97e85c0165202eaff23cb6c1f5",
  },
});
