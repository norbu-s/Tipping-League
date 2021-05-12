// import React from "react";
import Header from "../../components/Header"
import React from "react";
import Search from '../../components/Search';
import Table from '../../components/Table';


function Home() {
    const [teams, setTeams] = React.useState(
        []
    )
    const[searchText, setSearchText] = React.useState(
    ""
  )
    React.useEffect(function () {
        fetch('http://localhost:3001/api/rapid/table')
            .then(res => {
                return (res.json())
            }).then(teams => {
                setTeams(teams.results)
            })
    }, [])
    // const filteredTeams = teams.filter ( (teams) => {
    //     if (teams.team.toLowerCase().includes(searchText.toLowerCase()))
    //     return true;
    //     else return false;
    // })
    // console.log("return", teams)
    return (
    <div className="App">
        <Header />
        <h1>English Premier League Standings</h1>
        {/* <Search searchText={searchText} setSearchText={setSearchText}/> */}
        <Table /> 
    </div>
);
}

export default Home;



// window.onload = function App() {
//     const [rank, setRank] = React.useState(
//         []
//     )

//     React.useEffect(function () {
//         fetch('http://localhost:3001/api/rapidapi/table')
//             .then(res => {
//                 return (res.json())
//             }).then(rank => {
//                 setUsers(rank.results)
//             })
//     }, [])
//     console.log(res)
//     return (
       
//   );
// }
// export default Home;