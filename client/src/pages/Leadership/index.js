import React from "react";
import { Link } from "react-router-dom";
// import Search from '../../components/Search';
import Table from '../../components/Table';
import Header from "../../components/Header";
// import Button from "../../components/Button";

function LeaderBoard() {
    const [users, setUsers] = React.useState(
        []
    )

    React.useEffect(function () {
        fetch('http://localhost:3001/api/rapid/table')
            .then(res => {
                return (res.json())
            }).then(users => {
                setTeams(users.records)
            })
    }, [])
    console.log("return", teams)
    return (
        <div className="App">
            <Header />
            <h1>League Standing</h1>
            <Link className={`nav-link dawn-color`} to="/tips">Click here to Enter you Tips!!</Link>     
            <Table users={users }/>
        </div>
    );
}

    export default LeaderBoard;
