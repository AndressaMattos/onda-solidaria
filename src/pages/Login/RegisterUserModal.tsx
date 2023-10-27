import React, { useState } from 'react';
import Modal from 'react-modal';
import LoginService from '../../services/LoginService';
import * as S from './styles'

interface RegisterUserModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const RegisterUserModal: React.FC<RegisterUserModalProps> = ({ isOpen, onRequestClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = new LoginService()
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const register = async () => {
    registerUser.registerUser(email, password)
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Registrar Usuário"
    >
      <S.CenteredContainer>
        <S.AuthForm>
          <h2> Cadastro</h2>
          <div>
            <S.Input type="email" placeholder="Insira um e-mail"  value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <S.Input type="password" placeholder="Insira uma senha" value={password} onChange={handlePasswordChange} />
          </div>
          <S.RegisterButton type="button" onClick={register}>
            Registrar
          </S.RegisterButton>
          <S.RegisterButton type="button" onClick={onRequestClose}>
            Fechar
          </S.RegisterButton>
        </S.AuthForm>
      </S.CenteredContainer>
    </Modal>
  );
};

export default RegisterUserModal;
