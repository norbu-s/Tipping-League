
import React from "react";
import { Link } from "react-router-dom";
// import Search from '../../components/Search';
// import Table from '../../components/Table';
import Header from "../../components/Header";
import Button from "../../components/Button";

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
                setTeams(teams.records)
            })
    }, [])
    const filteredTeams = teams.filter ( (team) => {
        if (teams.team.toLowerCase().includes(searchText.toLowerCase()))
        return true;
        else return false;
    })
    console.log("return", teams)
    return (
        <div className="App">
            <Header />
            <h1>English Premier League Standings</h1>
            <Link className={`nav-link dawn-color`} to="/tips">Click here to Enter you Tips!!</Link>     

        </div>
    );
}

    export default Home;
