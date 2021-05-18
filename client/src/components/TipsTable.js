function TipsTable(props) {
  // console.log(props);
  return (
    <table>
      <thead>
        <tr>
          <td>Date</td>
          <td>Team1</td>
          <td>Team2</td>
          {/* <td>Away Team</td> */}
        </tr>
      </thead>
      <tbody>
        {props.users ? (
          props.result.map((result) => {
            return (
              <tr key={results.date}>
                <td>{result.away_team}</td>
                <td>{result.home_team}</td>
                {/* <td>{user.tips[0] ? user.tips[0].points : 0}</td> */}
              </tr>
            );
          })
        ) : (
          <tr>
            <td>Date</td>
            <td>Team1</td>
            <td>Team2</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default TipsTable;
