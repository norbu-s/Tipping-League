import ImageTimelapse from 'material-ui/svg-icons/image/timelapse'
import React from 'react'
import Header from "../../components/Header"

function Leadership() {
  //fetch  name and Point
  // Query from User table and Tips
  return (
    <div className="App">
      <h1>LeaderShip Board</h1>
      {/* <Search searchText={searchText} setSearchText={setSearchText}/> */}
      <Table ranking={filteredRanking}/>
    </div>
  );
}


export default Leadership;