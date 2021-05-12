import axios from "axios";
const url = "http://localhost:3001";

export default {
  getTable: function() {
    return axios.get(url + "/api/rapid/table", {withCredentials: true});
  },
};