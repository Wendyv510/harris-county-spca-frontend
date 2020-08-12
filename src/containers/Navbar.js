import React from 'react' 
import { Link } from 'react-router-dom' 

const Navbar = () => (
    <nav className="navbar">
        <ul>
         <li><Link to ="/">Home</Link></li>
         <li><Link to ="/cats" >Adoptable Cats</Link></li>
         <li><Link to ="/dogs" >Adoptable Dogs</Link></li>
         <li><Link to ="/apply" >Apply to Adopt</Link></li>
        </ul>
    </nav>
    )


export default Navbar 