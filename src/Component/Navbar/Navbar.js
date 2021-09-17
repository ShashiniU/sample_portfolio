
import  React, { useState,useEffect } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import '../../App.css'
import {MobileIcon, Navright} from './Navbar.element'
 import { Container } from '../Globalstyles'
 import Logo from '../../Img/Logo.gif'


const Navbar = ()=> {
     
    // const [showNav, setShowNav] = useState(false);
    const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);




        return (
          
                <nav className="Navbar">
                  <Container>
                   <div className="navbarContainer">
                   <ui className="navleft"> 
                   <a href="/" className="navbar-logo">
                   <NavLink
            to="/"
            exact
            onClick={closeMobileMenu }
            // onClick={() => setShowNav(!showNav)}
            // role="button"
            // onKeyDown={() => setShowNav(!showNav)}
            // tabIndex={0}
          >
            <img src={Logo} alt="logo"></img>
         
          </NavLink>
                   </a>

                   <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

                   </ui>
               
               {/* <ui className="navright" onClick={handleClick} click={click} > */}
               <Navright onClick={handleClick} click={click}> 
                                       
                      
                     <li className="navItem active"> <a href="#home" >

                     <NavLink
            to="/"
            exact

            onClick={closeMobileMenu}
            // onClick={() => setShowNav(!showNav)}
            // role="button"
            // onKeyDown={() => setShowNav(!showNav)}
            // tabIndex={0}
          >
            Home
          </NavLink>
                              
                           </a></li>

                   
                           <li className="navItem"><a href="#about" >
                           <NavLink
            to="/about"
            onClick={closeMobileMenu}
            // onClick={() => setShowNav(!showNav)}
             role={button}
            // onKeyDown={() => setShowNav(!showNav)}
            // tabIndex={0}
          >
            About
          </NavLink>
                           </a></li>
<li className="navItem"><a href="#portfolio" >
<NavLink
            to="/Portfolio"
            onClick={closeMobileMenu}
            // onClick={() => setShowNav(!showNav)}
            role="button"
            // onKeyDown={() => setShowNav(!showNav)}
            // tabIndex={0}
          >
            Portfolio
          </NavLink>
                           </a></li>
                     
                           

                  
                           <li className="navItem"><a href="#skills" >
                           <NavLink
            to="/Qualifications"
            onClick={closeMobileMenu}
            // onClick={() => setShowNav(!showNav)}
            role="button"
            // onKeyDown={() => setShowNav(!showNav)}
            // tabIndex={0}
          >
            Skills
          </NavLink>
                           </a></li>

         
                           <li className="navItem"><a href="contact" >
                           <NavLink
            to="/contact"
            onClick={closeMobileMenu}
            // onClick={() => setShowNav(!showNav)}
            role="button"
            // onKeyDown={() => setShowNav(!showNav)}
            // tabIndex={0}
          >
            Contact Me
          </NavLink>      
                           </a></li>
                     

         
                       
       
              </Navright>
                   </div>
                   </Container>
                
                
            </nav>
         
        )
    }

export default Navbar;
