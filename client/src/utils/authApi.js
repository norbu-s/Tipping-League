import axios from "axios";
const url = window.location.hostname.includes("localhost")
  ? "http://localhost:3001"
  : "";
// Export an object containing methods we'll use for accessing the Dog.Ceo API

function isLoggedin() {
  return axios.get(url + "/api/users/authenticated", {
    withCredentials: true,
  });
}

export default isLoggedin;
