componentDidMount(){
    fetch('http://localhost:3000/api/v1/dogs',{
      method: 'GET' 
    })
    .then(response => response.json())
    .then(dogs => console.log(dogs))
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/cats',{
      method: 'GET' 
    })
    .then(response => response.json())
    .then(cats => console.log(cats))
  }