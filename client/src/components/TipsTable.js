function TipsTable(props) {
  console.log(props);
  return (
    <table>
      <thead>
        <tr>
          <td>Date</td>
          <td>Away Team</td>
          <td>Home Team</td>
          {/* <td>Away Team</td> */}
        </tr>
      </thead>
      <tbody>
        {props.users ? (
          props.result.map((result) => {
            return (
              <tr key={results.date}>
                <td>{results.away_team}</td>
                <td>{results.home_team}</td>
                {/* <td>{user.tips[0] ? user.tips[0].points : 0}</td> */}
              </tr>
            );
          })
        ) : (
          <tr>
            <td>Date</td>
            <td>Away Team</td>
            <td>Home Team</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default TipsTable;
