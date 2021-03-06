import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ResultsTable from "../../components/ResultsTable";

function Results() {
  const [matches, setMatches] = React.useState([]);

  React.useEffect(function () {
    fetch("/api/rapid/results")
      .then((res) => {
        return res.json();
      })
      .then((results) => {
        setMatches(results.matches);
      });
  }, []);
  console.log("return", matches);
  return (
    <div>
      <Header />
      <h1>Results for the last Round</h1>
      <ResultsTable matches={matches} />
      <Footer />
    </div>
  );
}

export default Results;
