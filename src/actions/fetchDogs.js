

export function fetchDogs(action){
    return(dispatch) => {
    fetch('http://localhost:3000/api/v1/dogs',{
      method: 'GET' 
    })
    .then(response => response.json())
    .then(dogs => dispatch({
        type: 'FETCH_DOGS',
        payload: dogs
    }))
    }
}
