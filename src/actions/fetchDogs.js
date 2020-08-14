

export function fetchDogs(action){
    return(dispatch) => {
    fetch('http://localhost:3001/api/v1/dogs')
    .then(response => response.json())
    .then(dogs => console.log(dogs)
    //     dispatch({
    //     type: 'FETCH_DOGS',
    //     payload: dogs
    // })
    )
    }
}
