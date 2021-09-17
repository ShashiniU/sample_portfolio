import styled from "styled-components";

export const Container2 = styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
position: relative;
  width: 1000px;
height: 450px;
    background: #0161545b;
    
margin: 100px auto 0;


@media screen and (max-width: 960px) {
    
    margin-top: 70px;
    flex-wrap: wrap;
    height: 550px;
    display:flex;
    flex-direction: row;
    width: 370px;
   
    justify-content:center;
  }
`;