import React from "react";
import { Link } from "react-router-dom";
import Table from "../../components/Table";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Results() {
  const [matches, setMatches] = React.useState([]);

  React.useEffect(function () {
    fetch("http://localhost:3001/api/rapid/results")
      .then((res) => {
        return res.json();
      })
      .then((teams) => {
        setMatches(teams.matches);
      });
  }, []);
  console.log("return", matches);
  return (
    <div>
      <Header />
      <h1>Results for the last Round</h1>
      <h2>
        {" "}
        <Link className="link" to="/tips"></Link>{" "}
      </h2>
      <Table matches={matches} />
      <Footer />
    </div>
  );
}

export default Results;
