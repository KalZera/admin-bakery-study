import axios from "axios";

const UrlBase = "http://localhost:3001/";
const TIMEOUT = 60 * 1000;

export const setupAxios = () => {
  axios.defaults.timeout = TIMEOUT;
  axios.defaults.baseURL = UrlBase;
};
