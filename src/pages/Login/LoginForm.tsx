import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  CenteredContainer,
  AuthForm,
  Input,
  Button,
  ErrorText,
  Title,
  RecoverButton,
  RegisterButton
} from './styled-components';

interface LoginFormProps {
  onSubmit: SubmitHandler<FormValues>;
  onRecoverPassword: () => void;
}

type FormValues = {
  email: string;
  password: string;
};

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, onRecoverPassword }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  return (
    <CenteredContainer>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <Title>Onda Solidária</Title>
        <div>
          <label>Email</label>
          <Input
            type="text"
            placeholder="Telefone, nome de usuário ou email"
            {...register('email', {
              required: 'Este campo é obrigatório',
            })}
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </div>

        <div>
          <label>Senha</label>
          <Input
            type="password"
            placeholder="Senha"
            {...register('password', { required: 'Este campo é obrigatório' })}
            minLength={8}
          />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
        </div>

        <Button type="submit">Entrar</Button>

        <RecoverButton onClick={onRecoverPassword}>Esqueceu a senha?</RecoverButton>
        <RegisterButton onClick={onRecoverPassword}>Cadastre-se sua ONG</RegisterButton>

      </AuthForm>
    </CenteredContainer>
  );
};

export default LoginForm;
