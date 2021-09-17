import React from "react";
import '../Body/Body.css';
import './Contact.css'
import {Container} from '../Globalstyles'
import '../Body/Body.css'




const PortfolioPage =()=> {
   
    
    
    
    const[heading] =React.useState({
        mainHeading: "Contact",
        mainContent: "Let's know about me"
    });
    return(
        <div className="contact" id="#contact">
           
           <Container>
                



                <div className="Contactme">


                <div className="commonsection">

<h1 className="mainheading">
    {heading.mainHeading}
</h1>

<p className="maincontent">
    {heading.mainContent}
</p>

<div className="commonborder">
   
</div>
</div>







</div>
</Container>
</div>
    );
}
export default PortfolioPage