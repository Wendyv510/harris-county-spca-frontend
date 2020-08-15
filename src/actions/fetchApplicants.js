

export function fetchApplicants(){
  return(dispatch) => {
    fetch('https://localhost:3001/api/v1/applicants')
     .then(response => response.json())
     .then(applicants =>  
        dispatch({
        type: 'FETCH_APPLICANTS',
        payload: applicants
    })
    )
}
}

