import React from 'react'

const Cats = (props) => {
console.log(props)
    return(
        <div className="Cats">
            {props.felines.map(cat => <li key={cat.id}> Name:{cat.attributes.name}<br></br> Age:{cat.attributes.age}<br></br> Kind:{cat.attributes.kind}<br></br><img src = {cat.attributes.image_url}></img></li>)}
        </div>
    )
}

export default Cats 