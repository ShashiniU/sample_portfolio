import React, { useState }  from 'react';
import './Footer.css';
import '../Body/Body.css'
import '../Navbar/Navbar.css'
import { NavLink } from 'react-router-dom';
import { UilPhone,UilEnvelope, UilArrowCircleRight } from '@iconscout/react-unicons'
import { FaGithub,FaLinkedinIn } from "react-icons/fa";
import { MdEmail,MdCall } from "react-icons/md";
import {Container} from '../Globalstyles'
import Logofooter from '../../Img/Logofooter.gif'
  

export default function Footer() {
    const [showNav, setShowNav] = useState(false);
  return (
   <div className="footer" id="#footer">
      <Container>
          <div className="row">
              {/* display logo and anout me  */}
              <div className="col3">
<div>
<a href="/" className="logo">
                   <NavLink
            to="/"
            exact
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
           <img src={Logofooter} alt="logofooter"></img>
          </NavLink>
                   </a>
</div>
<div>
<ui className="FooterSocialMedia">
<li>
                            <a href="  https://github.com/ShashiniU" className="social">
                           
                           <FaGithub/>
                           </a>
                            </li>
                            <li >
                                <a href="https://www.linkedin.com/in/shashini-uwanshika-775782206/" className="social">
                           
                            <FaLinkedinIn/>
                            </a>
                            </li>
                            <li>
                            <a href="mailto:shashiuwanshi97@gmail.com" className="social">
                           
                            <MdEmail/>
                           </a>
                            
                            
                            </li>
                            <li>
                            <MdCall/>
                            </li>


                        </ui>
</div>







              </div>

              {/* display menu items */}
              <div className="col3">
                  <div className="Footerheading">
                    Navigate from here
                  </div>
              <div className="FooterMenuItems">


  <li className="navItem active"> <a href="#home" >

                     <NavLink
            to="/"
            exact
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
              <div className="row5">
   <div className="col5">
   <UilArrowCircleRight/>
    </div>
    <div className="col5"> &nbsp;
    Home
    </div>

   </div>
              
              
            
          </NavLink>
                              
                           </a></li>

                   
                           <li className="navItem"><a href="#about" >
                           <NavLink
            to="/about"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
              <div className="row5">
   <div className="col5">
   <UilArrowCircleRight/>
    </div>
    <div className="col5"> &nbsp;
    About
    </div>

   </div>
              
           
          </NavLink>
                           </a></li>
<li className="navItem"><a href="#portfolio" >
<NavLink
            to="/Portfolio"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
                <div className="row5">
   <div className="col5">
   <UilArrowCircleRight/>
    </div>
    <div className="col5"> &nbsp;
    Portfolio
    </div>

   </div>
              
            
          </NavLink>
                           </a></li>
                     
                           

                  
                           <li className="navItem"><a href="#skills" >
                           <NavLink
            to="/Qualifications"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
                <div className="row5">
   <div className="col5">
   <UilArrowCircleRight/>
    </div>
    <div className="col5"> &nbsp;
    Skills
    </div>

   </div>
          
          </NavLink>
                           </a></li>

         
                           <li className="navItem"><a href="contact" >
                           <NavLink
            to="/contact"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
                <div className="row5">
   <div className="col5">
   <UilArrowCircleRight/>
    </div>
    <div className="col5"> &nbsp;
    Contact Me
    </div>

   </div>
            
          </NavLink>      
                           </a></li>




              </div>
              </div>


              {/* display contact info */}
              <div className="col3">
              <div className="Footerheading">
                    Contact Me 
                  </div>
                  <div className="FooterContect">
<li>
   <div className="row5">
   <div className="col5">
    <UilPhone/>
    </div>
    <div className="col5"> &nbsp; &nbsp;
    +94 77 347 0512
    </div>

   </div>
     </li>
<li> 

<div className="row5">
   <div className="col5">
   <UilEnvelope/>
    </div>
    <div className="col5"> &nbsp; &nbsp;
    shashiuwanshi97@gmail.com
    </div>
   
   </div> </li>

                  </div>



              </div>

          </div>
          <div className="FooterCopyright">
    <p>Designed by Shashini Uwanshika</p>

</div>




      </Container>
      

    </div>
  );
}