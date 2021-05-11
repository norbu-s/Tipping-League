
import axios from "axios";
const url = "http://localhost:3001";

const competitionApi = {
  getAllcompetition: function(userId) {
    return axios.get(url + "/api/competition" + userId, { withCredentials: true });
  },
  searchCompetiton: function(userId, query) {
    return axios.get(url + "/api/competition/search/" + userId + "/q=" + query, { withCredentials: true });
  },
  createCompetiton: function(competitonData) {
    return axios.post(url + "/api/user/competition", competitonData, { withCredentials: true });
  },
  deleteCompetiton: function(competitonId) {
    return axios.delete(url + "/api/user/competiton/" + competitonId, { withCredentials: true });
  },
};

export default competitionApi;