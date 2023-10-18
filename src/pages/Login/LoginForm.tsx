import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import * as S from './styles'

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
    <S.CenteredContainer>
      <S.AuthForm onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Onda Solidária</S.Title>
        <div>
          <S.Input
            type="text"
            placeholder="Insira um e-mail"
            {...register('email', {
              required: 'Este campo é obrigatório',
            })}
          />
          {errors.email && <S.ErrorText>{errors.email.message}</S.ErrorText>}
        </div>

        <div>
          <S.Input
            type="password"
            placeholder="Insira sua senha"
            {...register('password', { required: 'Este campo é obrigatório' })}
            minLength={8}
          />
          {errors.password && <S.ErrorText>{errors.password.message}</S.ErrorText>}
        </div>

        <S.Button type="submit">Entrar</S.Button>

    <S.RecoverButton type="button" onClick={onRecoverPassword}>
      Esqueceu a senha?
    </S.RecoverButton>
    <S.RegisterButton type="button" onClick={onRegisterUser}>
      Cadastre-se sua ONG
    </S.RegisterButton>

      </S.AuthForm>
    </S.CenteredContainer>
  );
};

export default LoginForm;
