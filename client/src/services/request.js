import axios from "axios";
import queryString from "query-string";
import { APP_ENV, SERVER_API } from "../constants/config";

const request = axios.create({
  baseURL: APP_ENV === "development" ? SERVER_API : "",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

request.interceptors.request.use(async (config) => {
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : undefined;

  if (userInfo) {
    const token = await userInfo.token;
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default request;
