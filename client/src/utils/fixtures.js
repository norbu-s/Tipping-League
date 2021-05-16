import axios from "axios";
const url = "http://localhost:3001";

const fixturesApi = {
  createFixtures: function(userId) {
    return axios.get(url + "/api/fixtures" + userId, { withCredentials: true });
  },
};

export default fixturesApi;