function LeaderTable(props) {
  console.log(props);
  return (
    <table class="table table-dark table-striped">
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
                <td>{user.name}</td>
                <td>{user.tips[0] ? user.tips[0].points : 0}</td>
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
