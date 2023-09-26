import React, { useState } from 'react';
import { ModalOverlay, ModalContent, Input, Button, Title, RecoverButton,CenteredContainer} from './styled-components';
import AuthService from '../../../services/AuthService';

interface RecoverPasswordModalProps {
  onClose: () => void;
}

const RecoverPasswordModal: React.FC<RecoverPasswordModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);
  const authService = new AuthService();

  const handleRecuperarSenha = async () => {
    try {
        await authService.recoverPassword(email).then(() => {
        setIsEmailSent(true);
        onClose(); 
      });
    } catch (error) {
      console.error('Erro ao solicitar recuperação de senha:', error);
    }
  };

  return (
    <ModalOverlay>
      <CenteredContainer>
        <ModalContent>
          <Title>Recuperar Senha</Title>
          {isEmailSent ? (
            <p>Email de recuperação de senha enviado com sucesso!</p>
          ) : (
            <>
              <Input
                type="email"
                placeholder="Informe seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button onClick={handleRecuperarSenha}>Recuperar Senha</Button>
              <RecoverButton onClick={onClose}>Cancelar</RecoverButton>
            </>
          )}
        </ModalContent>
      </CenteredContainer>
    </ModalOverlay>
  );
};

export default RecoverPasswordModal;
