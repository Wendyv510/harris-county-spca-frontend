import React from 'react'

const Applicants = (props) => {
    
    return(
        <div class="row row-cols-2  align-items-start">
        <div className="Applicants">
            {props.people.map(person => <li key={person.id}> Name:{person.attributes.name}<br></br> Pet Name:{person.attributes.pet_name}<br></br> Email:{person.attributes.email_address}<br></br> Phone Number:{person.attributes.phone_number}<br></br> Address:{person.attributes.address}</li>)}
        </div>
        </div>
    )
}

export default Applicants 