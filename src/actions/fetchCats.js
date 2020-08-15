

export default function fetchCats(){
    return(dispatch) => {
        fetch('https://localhost:3001/api/v1/cats')
         .then(response => response.json())
         .then(cats =>  
            dispatch({
            type: 'FETCH_CATS',
            payload: cats
        })
        )
    }
}
