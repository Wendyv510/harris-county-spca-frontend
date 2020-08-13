import React from 'react'

const Cats = ({cats}) => {

    return(
        <div className="Cats">
            {cats.map(cat => <li key={cat.id}> {cat.name} {cat.age} {cat.type} {cat.image_url}</li>)}
        </div>
    )
}

export default Cats 