import React from 'react'
import { FaGithub,FaLinkedinIn } from "react-icons/fa";
import { MdEmail,MdCall } from "react-icons/md";
import { UilDownloadAlt,UilMessage } from '@iconscout/react-unicons'
import './Body.css';
import {HeaderUL,HeaderItems,Header} from './Body.element'
import {Container} from '../Globalstyles'
import HeaderImage from '../../Img/HeaderImage.gif'
import { Fade } from "react-awesome-reveal";


const Body = ()=>{
return(
    <Header>
       <Container>
            <div className="row">
                <div className="column">
                    <div className="headerContent">
                        <div className="headerSection">
                            <HeaderUL>
                       <Fade  duration="3000">
                            <HeaderItems>
                            <a href="  https://github.com/ShashiniU" className="social">
                           
                           <FaGithub/>
                           </a>
                            </HeaderItems>
                            <HeaderItems >
                                <a href="https://www.linkedin.com/in/shashini-uwanshika-775782206/" className="social">
                           
                            <FaLinkedinIn/>
                            </a>
                            </HeaderItems>
                            <HeaderItems>
                            <a href="mailto:shashiuwanshi97@gmail.com" className="social">
                           
                            <MdEmail/>
                           </a>
                            
                            
                            </HeaderItems>
                            <HeaderItems>
                            <MdCall/>
                            </HeaderItems>

                         </Fade>
                        </HeaderUL>
                        <Fade direction="left"  duration="3000">
                        <h1>Hi, I'm Shashini Uwanshika</h1>
                        
                        <h2>I am a Software Developer & welcome to my portfolio</h2> 
                      
                        <p>Intern at Axiata Digital Labs<br></br>
                        Undergraduate at NSBM Green University Town</p>
                         </Fade>
                        <div className="headerButton">
                            <a href="#home" className="btn btn-outline" id="bbbt"> My CV &nbsp; <UilDownloadAlt/></a>
                            &nbsp; &nbsp; &nbsp;
                            <a href="#home" className="btn btn-outline"> Contact Me &nbsp; <UilMessage/></a>

                        </div>

                    </div>

                </div>

                        </div>
                        
                <div className="column" id="headerimage">
                <div className="imageContent">
                    <img src={HeaderImage} alt="headerimage"></img>
                    </div>

</div>


            </div>
            

            </Container>
     

    </Header>
)
}
export default Body