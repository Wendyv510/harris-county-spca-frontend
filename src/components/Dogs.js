import React from 'react'

const Dogs = (props) => {
    console.log(props)

    return(
        <div className="Dogs">
           {/* {props.dogs.map((dog) => <li key={dog.id}> {dog.name} {dog.age} {dog.type} {dog.image_url}</li>)} */}
        </div>
    )
}

export default Dogs 