

export function fetchCats(action){
    return(dispatch) => {
    fetch('http://localhost:3001/api/v1/cats',{
      method: 'GET' 
    })
    .then(response => response.json())
    .then(cats => dispatch({
        type: 'FETCH_CATS',
        payload: cats
    }))
    }
}
