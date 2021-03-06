import axios from "axios";
const url = window.location.hostname.includes("localhost")
  ? "http://localhost:3001"
  : "";
const leadershipApi = {
  getAllleadership: function (userId) {
    return axios.get(url + "/api/leadership" + userId, {
      withCredentials: true,
    });
  },
};

export default competitionApi;
