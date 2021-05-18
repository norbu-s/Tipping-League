import axios from "axios";
const url = window.location.hostname.includes("localhost")
  ? "http://localhost:3001"
  : "";
const authAPI = {
  authenticated: function () {
    return axios.get(url + "/api/user/authenticated", {
      withCredentials: true,
    });
  },
};

export default authAPI;
