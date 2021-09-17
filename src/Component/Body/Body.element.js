import styled from "styled-components";
// import { FaMagento } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { Container } from "../../globalStyles";
export const Header = styled.div`
width: 100%;
height: 100vh;
overflow: hidden;  
background-repeat: no-repeat;
background-size: cover;
padding:  0;
margin: 0;
top: 0;
@media screen and (max-width: 960px) {
    
  height: 210vh;
  width: 100%;
 
  background-color:rgb(15 22 36);
  
 

  }
`;
export const HeaderUL = styled.div`
list-style-type: none;
display: flex;
cursor: pointer;

@media screen and (max-width: 960px) {
    
    margin-top: -30px;
    
  }
`;
export const HeaderItems = styled.div`
width: 42px;
    height: 42px;
    border: 2px solid #008271;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 15px;
  
    &:first-child {
        margin-left: 0;
      }

      &:hover {
        border-color:   #008271;
        background-color: #008271;
        box-shadow: 0 0  15px #008271;
        
      }

      @media screen and (max-width: 960px) {
        margin: 0 13px;
        width: 32px;
            height: 32px;   
           padding-top:3px;
          

        
      }
`;


