import axios from "axios";

export const api = axios.create({
  baseURL: "https://184d-20-206-112-244.sa.ngrok.io",
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
});
