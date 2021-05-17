function LeaderTable(props) {
  console.log(props);
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Points</td>
        </tr>
      </thead>
      <tbody>
        {props.teams ? (
          props.teams.map((team) => {
            return (
              <tr key={team.name}>
                {" "}
                <td>{team.tips.points}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td>Name</td>
            <td>Points</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default LeaderTable;
