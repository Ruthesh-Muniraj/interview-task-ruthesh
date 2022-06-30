import axios from "axios";

const mainAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
export { mainAxios };