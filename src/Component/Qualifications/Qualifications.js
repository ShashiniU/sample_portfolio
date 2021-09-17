import React from "react";
import '../../App.css';
import './Qualifications.css';
import Tabs from './Tabs';
import {Container} from '../Globalstyles'


const Qualifications =()=> {
    const[heading] =React.useState({
        mainHeading: "My Journey",
        mainContent: "Let's know about me"
    });
    return(
        <div className="qualifications">
           
           <Container>
                <div className="commonsection">

                    <h1 className="mainheading">
                        {heading.mainHeading}
                    </h1>
                    
                    <p className="maincontent">
                        {heading.mainContent}
                    </p>
                   
                   
                </div>
               
                <Tabs/>
                </Container>
        </div>
    )
    ;
}
export default Qualifications