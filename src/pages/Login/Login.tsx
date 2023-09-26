import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RecoverPasswordModal from './RecoverPassword';
import AuthService from '../../../services/AuthService';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
  const [isRecoverPasswordModalOpen, setIsRecoverPasswordModalOpen] = useState(false);
  const authService = new AuthService();
  const navigate = useNavigate();
  const handleLogin = async (data) => {
    try {
      const user = await authService.login(data.email, data.password);
      console.log(user);
      navigate('/Eventos')
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  const openRecoverPasswordModal = () => {
    setIsRecoverPasswordModalOpen(true);
  };

  const closeRecoverPasswordModal = () => {
    setIsRecoverPasswordModalOpen(false);
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} onRecoverPassword={openRecoverPasswordModal} />
      
      {isRecoverPasswordModalOpen && (
        <RecoverPasswordModal
          onClose={closeRecoverPasswordModal}
        />
      )}
    </div>
  );
};
