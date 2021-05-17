import React from "react";
// import { Link } from "react-router-dom";
import LeaderTable from "../../components/LeaderTable";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function LeaderBoard() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(function () {
    fetch("http://localhost:3001/api/users/leadership")
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        setUsers(users);
      });
  }, []);
  console.log("return", users);
  return (
    <div>
      <Header />
      <h1>Global Standing</h1>
      <LeaderTable users={users} />
      <Footer />
    </div>
  );
}

export default LeaderBoard;
