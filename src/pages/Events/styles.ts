import styled from 'styled-components';

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0 auto;
  background-color: red;
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


//Botão deletar
export const Button = styled.button`
  background-color: #f08a68;
  color: black;
  padding: 12px;
  margin-top: 3px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 80%;
  font-size: 16px;
  transition: background-color 0.3s;


  //mouse em cima do deletar evento
  &:hover {
    background-color: red;
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

//Formulário do Registro de Eventos
export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e3e3e3e3;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 700px;
  margin-top: 50px;
  h2, label{
    color: #000;
    font-weight: bolder;
  }
`;


//linha dos cards dos eventos
export const Cards = styled.ul`
  display: flex;
  gap: 20px;
  
`


//Card do Evento
export const Card = styled.li`
    list-style: none;
    text-align: center;
    width: 300px;
    border: 1px solid #181199;
    background-color: white;
    padding: 10px;
    border-radius: 8px;
    color: black;
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 1), 0px 2px 4px -1px rgba(0, 0, 0, 1);


// Informações de dentro do card
    .event-infos{
      display: flex;
      flex-direction: column;
      align-items: center;
      color: black;
    }
    .event-dates{
      margin-top: 20px;
      display: flex;
      justify-content: space-around;
    }

`
// Títulos h2
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color:black;
  text-shadow: 2px solid white;
`

