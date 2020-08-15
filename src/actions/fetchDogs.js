

export default function fetchDogs(){
  return(dispatch) => {
      fetch('https://localhost:3001/api/v1/dogs')
       .then(response => response.json())
       .then(dogs =>  
          dispatch({
          type: 'FETCH_DOGS',
          payload: dogs
      })
      )
  }
}

