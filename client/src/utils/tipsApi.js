import axios from "axios";
const url = window.location.hostname.contains("localhost")
  ? "http://localhost:3001"
  : "";

const tipsApi = {
  getAlltips: function (userId) {
    return axios.get(url + "/api/tips/" + userId, { withCredentials: true });
  },
  createTips: function (userId) {
    return axios.get(url + "/api/tips" + userId, { withCredentials: true });
  },
};

export default tipsApi;
