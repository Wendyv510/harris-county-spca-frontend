import React from 'react'

const Applicants = (props) => {
    

    return(
        <div className="Applicants">
            {props.people.map(person => <li key={person.id}> {person.attributes.name} {person.attributes.pet_name} {person.attributes.email_address} {person.attributes.phone_number} {person.attributes.address}</li>)}
        </div>
    )
}

export default Applicants 