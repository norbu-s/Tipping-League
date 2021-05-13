import React from 'react'



function Search(props) {
    return (
        <div>
            <input type="text" value={props.searchText} onChange = { (event) => {
                props.setSearchText (event.target.value)
                    console.log(event.target.value)
        }
            }/>
        </div>
    )
}

export default Search
