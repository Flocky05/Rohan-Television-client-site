import axios from "axios";

const server = axios.create({
  baseURL: "https://rohan-television-server-flocky05.vercel.app",
  timeout: 5000,
});
export default server;

// https://rohan-television-server-flocky05.vercel.app
