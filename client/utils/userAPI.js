import axios from "axios";
const url = "http://localhost:3001";

const userAPI = {
  registerUser: function(userData) {
    return axios.post(url + "/api/user/register", userData, {withCredentials: true});
  },
  logInUser: function(userData) {
    return axios.post(url + "/api/user/login", userData, {withCredentials: true});
  },
  logOutUser: function() {
    return axios.get(url + "/api/user/logout", {withCredentials: true});
  },
};

export default userAPI;