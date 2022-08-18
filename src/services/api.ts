import axios from "axios";

export const api = axios.create({
  baseURL: "http://20.206.112.244:3000",
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
});
