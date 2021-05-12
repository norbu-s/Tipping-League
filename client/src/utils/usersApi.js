import axios from "axios";
const url = "http://localhost:3001";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  register: function() {
    return axios.post(url + /api/users/register, userData, {withCredentials: true});
  },
  login: function() {
    return axios.post(url + /api/users/login, userData, {withCredentials: true});
  },
  login: function() {
    return axios.post(url + /api/users/logout, userData, {withCredentials: true});
  },
};