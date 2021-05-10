import React from 'react'

function Input(props){
    return (
        <div>
            <input type="text" value={props.users} onChange = { (event) => {
                props.setSearchText (event.target.value)
                    console.log(event.target.value)
        }
            }/>
        </div>
    )
}

export default Search