import React from 'react'

const Applicants = (props) => {
    

    return(
        <div className="Applicants">
            {props.applicants.map(applicant => <li key={applicant.id}> {applicant.name} {applicant.pet_name} {applicant.email_address} {applicant.phone_number} {applicant.address}</li>)}
        </div>
    )
}

export default Applicants 