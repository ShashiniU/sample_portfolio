import React from "react";
import './About.css';
import '../../App.css';
import '../Body/Body.css';
import { UilDownloadAlt } from '@iconscout/react-unicons'
import {Container} from '../Globalstyles'
import AboutImage from '../../Img/AboutImage.gif'

const About =()=> {
    const[heading] =React.useState({
        mainHeading: "About Me",
        mainContent: "Let's know about me"
    });
    return(
        <div className="about" id="#about">
           
           <Container>
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
                <div className="row">
                    <div className="col1">
                        <img src={AboutImage} alt="aboutimage"></img>
                      
                    </div>
                    <div className="col1">
                       <div className="aboutInfo">
                       <h1>Hi There, </h1>
                           <div className="info">
                               <p>
                               I'm Shashini Uwanshika. I'm doing my internship at Axiata Digital Labs and I'm an undergraduate at NSBM Green University Town. I'm an enthusiastic and great passion for learning new things ,love challenges andtry in my best to achieve them is my nature. 
                               I have strong technical skills and inter personal skills. I have good leadership skills and the ability to work in a team effectively.  
                               </p>                               
                           </div>
                           <div className="myinfo">
                               <div className="row2">
                                   <div className="col1">
                                       <strong>Name</strong>
                                       <p>U.V.D.Shashini Uwanshika</p>
                                   </div>
                                   <div className="col1">
                                       <strong>Email</strong>
                                       <p>shashiuwanshi97@gmail.com</p>
                                   </div>
                                   
                               </div>
                               <div className="row2">
                                   <div className="col1">
                                       <strong >LinkedIn</strong>
                                       <p>U.V.D.Shashini Uwanshika</p>
                                   </div>
                                   <div className="col1">
                                       <strong >GitHub</strong>
                                       <p>shashiuwanshi97@gmail.com</p>
                                   </div>
                                   
                               </div>
                           </div>
                           <div>
                           <div className="headerButton">
                            <a href="#home" className="btn btn-outline" id="bbbt"> My portfolio &nbsp; <UilDownloadAlt/></a>
                            </div>
                           </div>
                       </div>

                    </div>
                </div>
            </Container>
        </div>
    )
    ;
}
export default About