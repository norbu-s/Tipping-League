import axios from "axios";
const url = "http://localhost:3001";

const tipsApi = {
  getAlltips: function(userId) {
    return axios.get(url + "/api/tips" + userId, { withCredentials: true });
  },
};

export default tipsApi;