import axios from "axios";
const url = "http://localhost:3001";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  register: function() {
    return axios.get(url + "/api/user/authenticated", {withCredentials: true});
  },
};