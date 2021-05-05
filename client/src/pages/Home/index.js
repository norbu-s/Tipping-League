import React from 'react';
import Header from "../../components/Header";
import Table from './Table';

function Home() {
        <Header />
        const [results, setResults] = React.useState(
            []
        )
        //API call to get result details//
        React.useEffect(function () {
            fetch("https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/scorers")
                .then(res => {
                    return (res.json())
                }).then(results => {
                    setResults(results.results)
                })
        }, [])
    console.log("return", results)
    return (
        <div className="App">
            <Table results={results}/> 
        </div>
        
    )
}

export default Home
