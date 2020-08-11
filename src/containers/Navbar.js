import React from 'react' 

const Navbar = () => {
    return(
        <div className="Navbar">
            <Navlink to ="/" exact style={link}>Home</Navlink>
            <Navlink to ="/cats" exact style={link}>Adoptable Cats</Navlink>
            <Navlink to ="/dogs" exact style={link}>Adoptable Dogs</Navlink>
            <Navlink to ="/apply" exact style={link}>Apply to Adopt</Navlink>
        </div>
    )
}

export default Navbar 