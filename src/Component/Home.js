import React from 'react';
import  Body from '../Component/Body/Body';
import Navbar from '../Component/Navbar/Navbar'
import About from '../Component/About/About'
import Qualifications from '../Component/Qualifications/Qualifications'
import PortfolioPage from '../Component/Portfolio/PortfolioPage'
import Contact from '../Component/Contact/ContactPage'



export default function Home() {
    return (
      <div>
        
        <Body />
        <Navbar />
        <hr></hr>
        <About />
        <hr></hr>
        <Qualifications />
        <hr></hr>
        <PortfolioPage/>
        <hr></hr>
        <Contact/>
      
      </div>
    );
  }