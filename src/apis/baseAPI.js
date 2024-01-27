import axios from "axios";

const baseAPI = axios.create({
  baseURL: "https://elearningnew.cybersoft.edu.vn/api",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NSIsIkhldEhhblN0cmluZyI6IjI0LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNjUwODgwMDAwMCIsIm5iZiI6MTY4Nzg4NTIwMCwiZXhwIjoxNzE2NjU2NDAwfQ.HsoestvkIN5Kub3jnAr8UddrPugJcxCsAm4QfMi4ZbU",
  },
});

baseAPI.interceptors.request.use(
  (request) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      request.headers.Authorization = `Bearer ${currentUser.accessToken}`;
    }
    return request;
  },
  (error) => Promise.reject(error)
);

baseAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    if (error.response.status === 401) {
      localStorage.removeItem("currentUser");
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default baseAPI;
