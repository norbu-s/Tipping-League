import axios from "axios";
const url = "http://localhost:3001";

const resultsApi = {
  getAllresults: function(userId) {
    return axios.get(url + "/api/results" + userId, { withCredentials: true });
    },
   }; 
    
export default resultsApi;