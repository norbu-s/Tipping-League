import "./style.css";


function Table(props) {
    console.log(props)
    return (
        <table>
            {/* <thead>
            <tr><td>Team</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            </thead>
           <tbody>{
                //js to cycle to all user print another row with first name and last name.(m)
                props.users.map(results => {
                    return (
                     <tr key={user.cell}><td><img src={user.picture.medium} alt=""/></td><td>{user.name.first}</td><td>{user.name.last}</td><td>{user.phone}</td><td>{user.email}</td><td>{user.location.city}</td><td>{user.gender}</td></tr>
                        )
                    })
            }</tbody>  */}
        </table>
    )
}

export default Table
