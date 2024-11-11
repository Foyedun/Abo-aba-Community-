import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import donate from "../assets/donatrnow.svg";
const Header = () => {
  return (
   <div className="flex container justify-between items-center">    
<nav className='bg-black text- white fixed w-full z-'>
<Link to="/">

<img src={logo} alt="" />
</Link>
<ul className='hidden lg:flex items-center gap-8'>
<li>
    <Link to="/"> HOME</Link>
</li>
<li>
    <Link to="/"> ABOUT US</Link>
</li>
<li>
    <Link to="/"> ABOUT US</Link>
</li>
<li>
    <Link to="/"> 
    <img src={donate} alt="" />
    </Link>
</li>
</ul>
</nav>
      
</div>  
  );
}

export default Header