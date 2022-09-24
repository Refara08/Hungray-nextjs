import axios from "axios";

export default axios.create({
  baseURL: process.env.API_URL,
});
//http://localhost:3000
//https://refara08-hungray-nextjs.vercel.app
