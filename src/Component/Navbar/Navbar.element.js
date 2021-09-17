import styled from "styled-components";
// import { FaMagento } from "react-icons/fa";
// import { Link } from "react-router-dom";
 //import { Container } from "../Globalstyles";

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #ffffff;
  }
`;


export const Navright = styled.div`
display: flex;
list-style-type: none;


@media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")}; 
     opacity: 1;
    transition: all 0.5s ease;
    background: #101522;} ;
    padding-top: 30px;
    line-height:50px;
  }
`;
