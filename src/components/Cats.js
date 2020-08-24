import React from 'react'

const Cats = (props) => {

    return(
        <div className="Cats">
            {props.felines.map(cat => <li key={cat.id}> 
            Name:{cat.attributes.name}<br/>
             Age:{cat.attributes.age}<br/>
              Kind:{cat.attributes.kind}<br/>
              <img src = {cat.attributes.image_url} alt="kitten1"></img></li>)}
        </div>
    )
}

export default Cats 