import axios from "axios";

export const api = axios.create({
  baseURL: "http://191.232.179.16:3000",
  headers: {
    // "ngrok-sykip-browser-warning": "true",
  },
});
