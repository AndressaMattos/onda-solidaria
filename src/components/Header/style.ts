import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  height: 80px;

  background: white;
  color: black;
  transition: background-color 0.3s;
margin-block-end: 10px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border: 1px solid #181199;

  
  nav{
    display: flex;
    gap: 30px;
  }

  button{
    height: 50px;
    width: 100px; 
    color: #000;
    cursor: pointer;
    font-size: 16px;
  }

  &:hover {
    background-color: #dedede;
  }
`