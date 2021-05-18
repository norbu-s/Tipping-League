function ResultsTable(props) {
  console.log(props, "props");
  return (
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <td>Match Details</td>
          <td>Team1</td>
          <td>Team2</td>
          <td>Team1 Score</td>
          <td>Team2 Score</td>
        </tr>
      </thead>
      <tbody>
        {props.matches ? (
          props.matches.map((match) => {
            return (
              <tr key={match.when}>
                {" "}
                <td>{match.when}</td>
                <td>{match.team1.teamName}</td>
                <td>{match.team1.teamScore}</td>
                <td>{match.team2.teamName}</td>
                <td>{match.team2.teamScore}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td>Match Details</td>
            <td>Team1</td>
            <td>Team2</td>
            <td>Team1 Score</td>
            <td>Team2 Score</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default ResultsTable;
