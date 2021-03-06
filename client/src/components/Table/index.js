import "./style.css";

function Table(props) {
  console.log(props);
  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <td>Team</td>
          <td>Played</td>
          <td>Win</td>
          <td>Draw</td>
          <td>Loss</td>
          <td>Goals For</td>
          <td>Goals Against</td>
          <td>Points</td>
        </tr>
      </thead>
      <tbody>
        {props.teams ? (
          props.teams.map((team) => {
            return (
              <tr key={team.team}>
                {" "}
                <td>{team.team}</td> <td>{team.played}</td>
                <td>{team.win}</td>
                <td>{team.draw}</td>
                <td>{team.loss}</td>
                <td>{team.goalsFor}</td>
                <td>{team.goalsAgainst}</td>
                <td>{team.points}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td>Team</td>
            <td>Played</td>
            <td>Win</td>
            <td>Draw</td>
            <td>Loss</td>
            <td>Goals For</td>
            <td>Goals Against</td>
            <td>Points</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;
