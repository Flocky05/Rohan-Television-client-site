import axios from "axios";

const server = axios.create({
  baseURL: "https://rohan-television-server.vercel.app",
  timeout: 5000,
});
export default server;
