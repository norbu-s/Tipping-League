
import React from "react";
import { Link } from "react-router-dom";
// import Search from '../../components/Search';
import Table from '../../components/Table';
import Header from "../../components/Header";
// import Button from "../../components/Button";

function Home() {
    const [teams, setTeams] = React.useState(
        []
    )
 
    React.useEffect(function () {
        fetch('http://localhost:3001/api/rapid/table')
            .then(res => {
                return (res.json())
            }).then(teams => {
                setTeams(teams.records)
            })
    }, [])
    console.log("return", teams)
    return (
        <div className="App">
            <Header />
            <h1>English Premier League Standings</h1>
           <h2> <Link className="link" to="/tips"  >Click here to Enter you Tips!!</Link>  </h2>  
            <Table teams={teams }/>
        </div>
    );
}

    export default Home;
