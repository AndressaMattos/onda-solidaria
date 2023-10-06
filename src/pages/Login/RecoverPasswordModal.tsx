import React, { useState } from 'react';
import Modal from 'react-modal';
import {
  CenteredContainer,
  AuthForm,
  Input,
  Title,
  RegisterButton
} from './StyledComponents';
import AuthService from '../../../services/LoginService'; 

interface RecoverPasswordModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const RecoverPasswordModal: React.FC<RecoverPasswordModalProps> = ({ isOpen, onRequestClose }) => {
  const [email, setEmail] = useState('');
  const recoverPassword = new AuthService();
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const sendRecoverPassword = async () => {
    try {
      await recoverPassword.recoverPassword(email)
      console.log('Email de recuperação de senha enviado com sucesso');
      onRequestClose(); 
    } catch (error) {
      console.error('Erro ao solicitar recuperação de senha:', error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Recuperar Senha"
    >
      <CenteredContainer>
        <AuthForm>
          <Title>Recuperar Senha</Title>
          <div>
            <label>Email</label>
            <Input type="email" placeholder="email" value={email} onChange={handleEmailChange} />
          </div>
          <RegisterButton type="button" onClick={sendRecoverPassword}>
            Enviar Email de Recuperação
          </RegisterButton>
          <RegisterButton type="button" onClick={onRequestClose}>
            Fechar
          </RegisterButton>
        </AuthForm>
      </CenteredContainer>
    </Modal>
  );
};

export default RecoverPasswordModal;
