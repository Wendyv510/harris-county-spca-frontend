import React from 'react'

const Applicants = (props) => {
    
    return(
        <div className="Applicants">
            {props.people.map(person => <li key={person.id}> Name:{person.attributes.name}<br></br> Pet Name:{person.attributes.pet_name}<br></br> Email:{person.attributes.email_address}<br></br> Phone Number:{person.attributes.phone_number}<br></br> Address:{person.attributes.address}</li>)}
        </div>
    )
}

export default Applicants 