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
        {props.users ? (
          props.users.map((user) => {
            return (
              <tr key={user.name}>
                {" "}
                <td>{user.tips.points}</td>
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
