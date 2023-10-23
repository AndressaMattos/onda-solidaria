import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background-color: #ffffff;
  transition: background-color 0.3s;
  nav{
    display: flex;
    gap: 30px;
  }
  button{
    background: none;
    font-weight: 500;
    color: #646cff;
    outline: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    padding: 0;
  }

  &:hover {
    background-color: #dedede;
  }
`