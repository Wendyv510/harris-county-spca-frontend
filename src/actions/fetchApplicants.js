

export function fetchApplicants(action){
    return(dispatch) => {
    fetch('http://localhost:3000/api/v1/applicants',{
      method: 'GET' 
    })
    .then(response => response.json())
    .then(applicants => dispatch({
        type: 'FETCH_APPLICANTS',
        payload: applicants
    }))
    }
}

