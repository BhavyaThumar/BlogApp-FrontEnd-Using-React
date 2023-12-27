import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.jpg'
import { FaBars } from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

const Header = () => {
    const [isNavShowing, setIsNavShowing] = useState(window.innerWidth>800 ? true : false)
    
    const closeNavHnadler = () =>{
        if(window.innerWidth < 800){
            setIsNavShowing(false)
        }
        else{
            setIsNavShowing(true)
        }
    }
    return (
    <nav>
        <div className="container nav__container">
            <Link to= "/" className='nav__logo' onClick={closeNavHnadler}>
                <img src={Logo} alt="Navbar logo" />

            </Link>
            {isNavShowing &&  <ul className="nav__menu">
                <li><Link to="/profile" onClick={closeNavHnadler}>Profile</Link></li>
                <li><Link to="/create" onClick={closeNavHnadler} >Create Post</Link></li>
                <li><Link to="/authors"onClick={closeNavHnadler}>Authors</Link></li>
                <li><Link to="/logout" onClick={closeNavHnadler}>Logout</Link></li>
            </ul>}  
            <button className="nav__toggle-btn" onClick={()=> setIsNavShowing(!isNavShowing)}>
            {isNavShowing? <AiOutlineClose/>: <FaBars/>}
            </button>
        </div>
    </nav>
)
}

export default Header