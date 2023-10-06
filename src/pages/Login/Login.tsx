import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RecoverPasswordModal from './RecoverPasswordModal';
import RegisterUserModal from './RegisterUserModal';
import AuthService from '../../../services/LoginService';

export const Login: React.FC = () => {
  const [isRecoverPasswordModalOpen, setIsRecoverPasswordModalOpen] = useState(false);
  const [isRegisterUserModalOpen, setIsRegisterUserModalOpen] = useState(false);
  const authService = new AuthService();

  const handleLogin = async (data) => {
    try {
      const user = await authService.login(data.email, data.password);
      window.location.href = "/RegisterEvent";
      console.log(user);
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

  const openRegisterUserModal = () => {
    setIsRegisterUserModalOpen(true);
  };

  const closeRegisterUserModal = () => {
    setIsRegisterUserModalOpen(false);
  };

  return (
    <div>
      <LoginForm
        onSubmit={handleLogin}
        onRecoverPassword={openRecoverPasswordModal}
        onRegisterUser={openRegisterUserModal}
      />

      <RecoverPasswordModal
        isOpen={isRecoverPasswordModalOpen}
        onRequestClose={closeRecoverPasswordModal}
      />

      <RegisterUserModal
        isOpen={isRegisterUserModalOpen}
        onRequestClose={closeRegisterUserModal}
      />
    </div>
  );
};
