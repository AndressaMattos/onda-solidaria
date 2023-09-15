import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';

const FormContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;  

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

type FormData = {
    email: string;
    password: string;
};

export const Login: React.FC = () => {
    const { register, handleSubmit, formState: {errors} } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
        // Faça aqui a lógica de login ou cadastro com os dados inseridos.
    };

    return (
        <FormContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <Input
                  type="email"
                  {...register('email', {
                    required: 'Este campo é obrigatório',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido',
                    },
                  })}
                />
                {errors.email && <span>{errors.email.message}</span>}

                <label>Senha</label>
                <Input
                    type="password"
                    {...register('password', { required: 'Este campo é obrigatório' })}
                    min={8}
                />

                {errors.password && <span>{errors.password.message}</span>}
                <Button type="submit">Enviar</Button>
            </Form>
        </FormContainer>
    );
};

