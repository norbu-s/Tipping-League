
import axios from "axios";
const url = "http://localhost:3001";

const competitionApi = {
  getAllcompetition: function(userId) {
    return axios.get(url + "/api/competitions" + userId, { withCredentials: true });
  },
  searchCompetiton: function(userId, query) {
    return axios.get(url + "/api/competition/search/" + userId + "/q=" + query, { withCredentials: true });
  },
  createCompetiton: function(competitonData) {
    return axios.post(url + "/api/user/competitions", competitonData, { withCredentials: true });
  },
  deleteCompetiton: function(competitonsId) {
    return axios.delete(url + "/api/user/competitons/" + competitonsId, { withCredentials: true });
  },
};

export default competitionApi;