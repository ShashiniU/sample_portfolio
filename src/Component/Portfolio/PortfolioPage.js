import React from "react";

import '../Body/Body.css';
import './PortfolioPage.css'
import {Container} from '../Globalstyles'
import HouseOfCake from '../../Img/HouseOfCake.gif'
import dash1 from '../../Img/dash1.gif'
import Alondra from '../../Img/Alondra.gif'





const PortfolioPage =()=> {
   
    
    
    
    const[heading] =React.useState({
        mainHeading: "Portfolio",
        mainContent: "Let's know about me"
    });
    return(
        <div className="portfolio" id="#portfolio">
           
           <Container>
                



                <div className="PortfolioPage">
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
            <div className="portfolios-data">
         <div className="row" id="row">
             <div className="col6">
                 <div className="Prortfolio-boxes">
                     <img src={HouseOfCake}  alt="desk" id="houseofcake"></img>
                     <div className="boxHeading">HouseOfCake - Mobile App
</div>
<div className="boxcontent">This mobile application design for online orderfavorite cakes and user can upload their favorite designs as well.
                     <br></br><br></br>
                     Bakery industry is one of the emerging industries in the market with lots of future scope. Bakers generally operate the business offline in most part of the world, but with passing time and rise of technological era, this industry is going online slowly.We are offering online ordering app for bakeries on Android platform. The application is perfectly designed to operate bakery business and sell the products online effectively. The application holds amazing features to support the business and the customers.

</div>
<div className="headerButton" id="headerButton">
                            <a href="#home" className="btn btn-outline" id="bbbt"> Read More </a>
                               </div>

                 </div>
             </div>
             <div className="col6">
                 <div className="Prortfolio-boxes">
                 <img src={dash1}  alt="desk"></img>
                     <div className="boxHeading">Dashboard for Corona Virus(Covid-19) updates</div>
                     <div className="boxcontent">This Dashboard design for both mobile and web applications. The Purpose of this application is to get Covid-19 updates in Sri Lanka. And also I drop a chatbot for more informations</div>
                     <div className="headerButton" id="headerButton">
                            <a href="#home" className="btn btn-outline" id="bbbt"> Read More </a>
                               </div>

                 </div>
             </div>
             <div className="col6">
             <div className="Prortfolio-boxes">
                     <img src={Alondra} width="300px" height="300px" alt="desk"></img>
                     <div className="boxHeading">Alondra</div>
                    
                     <div className="boxcontent">We have developed an online ordering system for UK customer. Alondra Hend Band is the name of the company. Alondra is a headband manufacturer company in the United Kingdom.</div>
                     <div className="headerButton" id="headerButton">
                            <a href="#home" className="btn btn-outline" id="bbbt"> Read More </a>
                               </div>
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
export default PortfolioPage