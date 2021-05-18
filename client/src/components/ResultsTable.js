function ResultsTable(props) {
  console.log(props);
  return (
    <table>
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
        {props.match ? (
          props.matches.map((match) => {
            return (
              <tr key={match.when}>
                {" "}
                <td>{match.when}</td>
                <td>{match.team1[0].teamName}</td>
                <td>{match.teamName}</td>
                <td>{match.teamScore}</td>
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
