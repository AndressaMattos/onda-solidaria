import React, { useState } from 'react';
import Modal from 'react-modal';
import AuthService from '../../services/LoginService'; 
import * as S from './styles'
import Swal from 'sweetalert2';

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
      Swal.fire({
        icon: 'success',
        title: 'Email de recuperação de senha enviado com sucesso',
        showConfirmButton: false,
        timer: 1500
      })
      onRequestClose(); 
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro ao enviar email de recuperação de senha',
        showConfirmButton: false,
        timer: 1500
      })
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Recuperar Senha"
    >
      <S.CenteredContainer>
        <S.AuthForm>
          <S.Title>Recuperar Senha</S.Title>
          <div>
            <label>Email</label>
            <S.Input type="email" placeholder="email" value={email} onChange={handleEmailChange} />
          </div>
          <S.RegisterButton type="button" onClick={sendRecoverPassword}>
            Enviar Email de Recuperação
          </S.RegisterButton>
          <S.RegisterButton type="button" onClick={onRequestClose}>
            Fechar
          </S.RegisterButton>
        </S.AuthForm>
      </S.CenteredContainer>
    </Modal>
  );
};

export default RecoverPasswordModal;
