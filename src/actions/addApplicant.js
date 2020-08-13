
export default addApplicant = (data) => {
    return(dispatch) => {
        fetch('http://localhost:3001/api/v1/applicants', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })

    }
}