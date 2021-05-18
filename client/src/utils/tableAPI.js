import axios from "axios";
const url = window.location.hostname.includes("localhost")
  ? "http://localhost:3001"
  : "";
export default {
  getTable: function () {
    return axios.get(url + "/api/rapid/table", { withCredentials: true });
  },
};
