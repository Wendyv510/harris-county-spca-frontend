

export function fetchCats(){
    return(dispatch) => {
    return fetch('http://localhost:3001/api/v1/cats')
    .then(response => response.json())
    .then(cats => console.log(cats)

    )
    .catch(err =>  console.log(err))
    }
}
