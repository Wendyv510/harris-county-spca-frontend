import React from 'react'

const Cats = (props) => {
console.log(props)
    return(
        <div className="Cats">
            {/* {props.felines.map(cat => <li key={cat.id}> {cat.name} {cat.age} {cat.type} {cat.image_url}</li>)} */}
        </div>
    )
}

export default Cats 