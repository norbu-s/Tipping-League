import "./style.css";


function Table(props) {
    console.log(props)
    return (
        <table>
            <thead>
            <tr><td>Team</td><td>Played</td><td>Win</td><td>Draw</td><td>Loss</td><td>Goals For</td><td>Goals Against</td><td>Points</td></tr>
            </thead>
           <tbody>{
                //js to cycle to all user print another row with first name and last name.(m)
                props.records.map(records => {
                    return (
                     <tr><td>{records.teams}</td><td>{records.played}</td><td>{records.win}</td><td>{records.draw}</td><td>{records.loss}</td><td>{records.goalsFor}</td><td>{records.goalsAgainst}</td><td>{records.points}</td></tr>
                        )
                    })
            }</tbody> 
        </table>
    )
}

export default Table
