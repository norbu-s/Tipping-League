import React from "react";
import Header from "../../components/Header"

function App() {
    const [rank, setRank] = React.useState(
        []
    )

    React.useEffect(function () {
        fetch('http://localhost:3001/api/rapidapi/table')
            .then(res => {
                return (res.json())
            }).then(rank => {
                setUsers(rank.results)
            })
    }, [])
    console.log(res)
    return (
       
        <div className="App">
              <Header />
      <h1>English Premier League Standings</h1>
      <Table rank={filteredRank}/>
    </div>
  );
}
export default App;