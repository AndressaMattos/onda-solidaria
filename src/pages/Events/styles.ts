import styled from 'styled-components';

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f4;
`;

export const RegisterEventForm = styled.form`
  display: flex;
  justify-content: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 500px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 15px;
  width: 50%;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  background-color: #610000;
  color: #fff;
  padding: 12px;
  margin-top: 3px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 80%;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e80909;
  }
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;


export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e3e3e3e3;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 700px;
  h2, label{
    color: #000;
    font-weight: bolder;
  }
`;

export const Cards = styled.ul`
  display: flex;
  gap: 20px;
`

export const Card = styled.li`
    list-style: none;
    text-align: center;
    width: 300px;
    border: 1px solid #e3e3e3;
    background-color: #181199;
    padding: 10px;
    border-radius: 8px;
    color: #b6c2f2;

    .event-infos{
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #b6c2f2;
    }
    .event-dates{
      margin-top: 20px;
      display: flex;
      justify-content: space-around;
    }

`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
