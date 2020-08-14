import React from 'react'

const Dogs = (props) => {
    console.log(props)

    return(
        <div className="Dogs">
           {props.mutts.map((dog) => <li key={dog.id}> {dog.attributes.name} {dog.attributes.age} {dog.attributes.breed} <img src = {dog.attributes.image_url} alt="kitten2"></img></li>)}
        </div>
    )
}

export default Dogs 