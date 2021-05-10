import React from 'react';
import Header from "./Header";
import Table from '../pages/Home';

function Home() {
        <Header />
        const [results, setResults] = React.useState(
            []
        )
        //API call to get result details//
        React.useEffect(function () {
            fetch("/table")
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
