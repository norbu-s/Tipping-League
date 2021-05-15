
import React from "react";
import { Link } from "react-router-dom";
// import Search from '../../components/Search';
// import Table from '../../components/Table';
import Header from "../../components/Header";
// import Button from "../../components/Button";

function Home() {
    const [teams, setTeams] = React.useState(
        []
    )
    const[addTips, setAddTips] = React.useState(
    ""
  )
  React.useEffect(function ()  {
        fetch('http://localhost:3001/api/users/tips', {  
            method: 'post',  
            headers: {
                'Accept': 'application/json',  
                'Content-Type': 'application/json'  
            },  
            body: JSON.stringify({  
                game: this.state.email,  
                password: this.state.password  
            })  
            }).then(res => {
            return(res.json())
            }).then(users => {
            setAddTips(users.results) 
            })
            },[])
    React.useEffect(function () {
        fetch('http://localhost:3001/api/users/fixtures')
            .then(res => {
                return (res.json())
            }).then(teams => {
                setTeams(teams.records)
            })
    }, [])

    }
    return (
        <div className="App">
            <Header />
            <h1>Enter your Tips for this week</h1>
            <button onClick={this.Tips}>
            Enter Tips!
            </button>
        </div>
    );
}

    export default Home;
