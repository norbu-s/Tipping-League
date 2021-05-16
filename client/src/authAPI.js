import axios from "axios";
const url = "http://localhost:3001";

const authAPI = {
  authenticated: function() {
    return axios.get(url + "/api/user/authenticated", {withCredentials: true});
  },
};

export default authAPI;