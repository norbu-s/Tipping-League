import React from 'react'
import Header from "../../components/Header"

function Tipping() {
    const [rank, setRank] = React.useState(
        []
    )

    React.useEffect(function () {
        fetch('http://localhost:3001/api/rapid/matches')
            .then(res => {
                return (res.json())
            }).then(rank => {
                setUsers(rank.results)
            })
    }, [])
    console.log(res)
     return (
    <div className="App">
      <h1>English Premier League Standings</h1>
      <Table rank={filteredRank}/>
    </div>
  );
}
export default Tipping;