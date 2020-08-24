
export const addApplicant = (data) => {
    return(dispatch) => {
        fetch('https://localhost:3001/api/v1/applicants', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },  
        })
        .then(response => response.json())
        .then(applicant => dispatch({type:'ADD_APPLICANT', payload: applicant}))
    }
}

export default addApplicant