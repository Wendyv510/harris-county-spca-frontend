import React from 'react' 
import { Navlink } from 'react-router-dom' 

const Navbar = () => (
    <nav>
        <ul>
         <li><Navlink to ="/" exact style={link}>Home</Navlink></li>
         <li><Navlink to ="/cats" exact style={link}>Adoptable Cats</Navlink></li>
         <li><Navlink to ="/dogs" exact style={link}>Adoptable Dogs</Navlink></li>
         <li><Navlink to ="/apply" exact style={link}>Apply to Adopt</Navlink></li>
        </ul>
    </nav>
    )


export default Navbar 