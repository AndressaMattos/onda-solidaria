import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import {
  CenteredContainer,
  AuthForm,
  Input,
  Button,
  ErrorText,
  Title,
  RecoverButton,
  RegisterButton
} from './StyledComponents';

interface LoginFormProps {
  onSubmit: SubmitHandler<FormValues>;
  onRecoverPassword: () => void;
  onRegisterUser: () => void; // Adicionado para abrir o modal de registro
}

type FormValues = {
  email: string;
  password: string;
};

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, onRecoverPassword, onRegisterUser }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  return (
    <CenteredContainer>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <Title>Onda Solidária</Title>
        <div>
          <Input
            type="text"
            placeholder="Insira um e-mail"
            {...register('email', {
              required: 'Este campo é obrigatório',
            })}
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </div>

        <div>
          <Input
            type="password"
            placeholder="Insira sua senha"
            {...register('password', { required: 'Este campo é obrigatório' })}
            minLength={8}
          />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
        </div>

        <Button type="submit">Entrar</Button>

    <RecoverButton type="button" onClick={onRecoverPassword}>
      Esqueceu a senha?
    </RecoverButton>
    <RegisterButton type="button" onClick={onRegisterUser}>
      Cadastre-se sua ONG
    </RegisterButton>

      </AuthForm>
    </CenteredContainer>
  );
};

export default LoginForm;
