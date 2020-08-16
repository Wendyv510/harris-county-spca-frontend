import React from 'react'

const Dogs = (props) => {
    console.log(props)
    return(
        <div className="Dogs">
           {props.mutts.map(dog => <li key={dog.id}> {dog.attributes.name}<br></br> {dog.attributes.age}<br></br> {dog.attributes.breed}<br></br> <img src = {dog.attributes.image_url} alt="dog"></img></li>)}
        </div>
    )
}

export default Dogs 