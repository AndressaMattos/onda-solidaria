import React, { useState } from 'react';
import Modal from 'react-modal';
import LoginService from '../../../services/LoginService';

import {
  CenteredContainer,
  AuthForm,
  Input,
  RegisterButton
} from './StyledComponents'

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
      <CenteredContainer>
        <AuthForm>
          <h2> Cadastro de ONG</h2>
          <div>
            <Input type="email" placeholder="Insira um e-mail"  value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <Input type="password" placeholder="Insira uma senha" value={password} onChange={handlePasswordChange} />
          </div>
          <RegisterButton type="button" onClick={register}>
            Registrar
          </RegisterButton>
          <RegisterButton type="button" onClick={onRequestClose}>
            Fechar
          </RegisterButton>
        </AuthForm>
      </CenteredContainer>
    </Modal>
  );
};

export default RegisterUserModal;
