import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.sampleapis.com/futurama",
});
 