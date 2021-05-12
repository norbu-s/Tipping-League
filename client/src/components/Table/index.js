// import "./style.css";


function Table(props) {
    console.log(props)
    return (
        <table>
            <thead>
            <tr><td>Team</td><td>Played</td><td>Win</td><td>Draw</td><td>Loss</td><td>Goals For</td><td>Goals Against</td><td>Points</td></tr>
            </thead>
           <tbody>{
                //js to cycle to all user print another row with first name and last name.(m)
                props.teams.map(teams => {
                    return (
                     <tr key={teams.team}><td>{teams.played}</td><td>{teams.win}</td><td>{teams.draw}</td><td>{teams.loss}</td><td>{teams.goalsFor}</td><td>{teams.goalsAgainst}</td><td>{teams.points}</td></tr>
                        )
                    })
            }</tbody> 
        </table>
    )
}

export default Table