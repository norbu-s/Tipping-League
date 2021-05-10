import axios from "axios";
const BASEURL = "https://localhost:3000";


export default {
  registration: function(userData) {
    return axios.post("/api/signup",userData);
  }
};
