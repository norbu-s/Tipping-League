import React from "react";
import { Link } from "react-router-dom";
// import Search from '../../components/Search';
import LeaderTable from "../../components/LeaderTable";
import Header from "../../components/Header";
// import Button from "../../components/Button";

function LeaderBoard() {
  const [users, setTeams] = React.useState([]);

  React.useEffect(function () {
    fetch("http://localhost:3001/api/users/leadership")
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        setTeams(users.records);
      });
  }, []);
  console.log("return", users);
  return (
    <div className="App">
      <Header />
      <h1>Global Standing</h1>
      <Link className={`nav-link dawn-color`} to="/tips">
        Click here to Enter you Tips!!
      </Link>
      <LeaderTable users={users} />
    </div>
  );
}

export default LeaderBoard;
