import axios from "axios";
import { getLocal } from "../utils/localStorage";

const BASE_URL = "https://elearningnew.cybersoft.edu.vn";

const TokenCybersoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlSlMgMzMiLCJIZXRIYW5TdHJpbmciOiIxNy8wMi8yMDI0IiwiSGV0SGFuVGltZSI6IjE3MDgxMjgwMDAwMDAiLCJuYmYiOjE2ODk2OTk2MDAsImV4cCI6MTcwODI3NTYwMH0.MRV8WJfRstSWSH-VhvCRNFTjrswM_3tM8u5u-EZysxk";

const tokenAuthorization = getLocal("user");

const configHeaderAxios = () => {
  return {
    TokenCybersoft,
    Authorization: "Bearer " + tokenAuthorization?.accessToken,
  };
};

export const https = axios.create({
  baseURL: BASE_URL,
  headers: configHeaderAxios(),
});
