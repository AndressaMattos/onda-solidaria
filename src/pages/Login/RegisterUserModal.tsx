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
          <div>
            <label>Email</label>
            <Input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label>Senha</label>
            <Input type="password" value={password} onChange={handlePasswordChange} />
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
