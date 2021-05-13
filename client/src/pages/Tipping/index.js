import React from 'react'
import Header from "../../components/Header"

function Tipping() {
    const [tips, setTips] = React.useState(
        []
    )

    React.useEffect(function () {
        fetch('http://localhost:3001/api/users/fixtures')
            .then(res => {
                return (res.json())
            }).then(tips => {
                setTips(tips.results)
            })
    }, [])
    // console.log(res)
     return (
         <div className="App">
           <Header />
      <h1>English Premier League Standings</h1>
      {/* <Table rank={filteredRank}/> */}
    </div>
  );
}
export default Tipping;