import React from 'react'
import Header from "../../components/Header"

function Leadership() {
  const[users, setUsers] = React.useState(
    []
  )
  const[searchText, setSearchText] = React.useState(
    ""
  )
  //API call to get employee details//
  React.useEffect(function () {
    fetch("https://randomuser.me/api?results=10")
    .then(res => {
      return(res.json())
    }).then(users => {
      setUsers(users.results) 
    })
    },[])
    const filteredUsers = users.filter ( (user) => {
        if (user.name.first.toLowerCase().includes(searchText.toLowerCase()))
        return true;
        else return false;
    })
  console.log("return",users)
  return (
    <div className="App">
      <h1>LeaderShip Boarg</h1>
      {/* <Search searchText={searchText} setSearchText={setSearchText}/> */}
      <Table ranking={filteredRanking}/>
    </div>
  );
}


export default Leadership;