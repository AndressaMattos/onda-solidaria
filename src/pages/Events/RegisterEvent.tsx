import React from 'react';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import EventsService from '../../services/EventsService';
import { useAuth } from '../../contexts/AuthContext';
import { FormValues } from '../../@types';
import * as S from './styles';


/*
  TODO: fazer a listagem dos eventos do usuário criado 
*/

export const RegisterEvent: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const eventsService = new EventsService();

  if (!currentUser) {
    return
  }

  const handleRegistration = async (data: FormValues) => {
    const newEvent = {
      ...data, 
      userId: currentUser?.uid
    }
    const success = await eventsService.createEvent(newEvent);
    if (success) {
      alert('Evento cadastrado com sucesso!');
    }

  };

  return (
    <S.Container>
      <button onClick={logout}>Sair</button>
      <Link to={'/events'}>Ver eventos</Link>
      <h2>Registro de Eventos</h2>
      
      <S.AuthForm onSubmit={handleSubmit(handleRegistration)}>
        <label>Nome do evento</label>
        <S.Input
          type="text"
          placeholder="Insira o nome do evento"
          {...register('eventName', {
            required: 'Este campo é obrigatório',
          })}
        />
        {errors.eventName && <S.ErrorText>{errors.eventName.message}</S.ErrorText>}

        <label>Cidade:</label>

        <S.Input
          type="text"
          placeholder="Insira uma cidade"
          {...register('city', {
            required: 'Este campo é obrigatório',
          })}
        />
        {errors.city && <S.ErrorText>{errors.city.message}</S.ErrorText>}
        <label>Estado:</label>

        <S.Input
          type="text"
          placeholder="Insira um estado"
          {...register('state', {
            required: 'Este campo é obrigatório',
          })}
        />
        {errors.state && <S.ErrorText>{errors.state.message}</S.ErrorText>}


        <label>Endereço:</label>

        <S.Input
          type="text"
          placeholder="Insira um endereço"
          {...register('address', {
            required: 'Este campo é obrigatório',
          })}
        />
        {errors.address && <S.ErrorText>{errors.address.message}</S.ErrorText>}

        <label>Descrição:</label>

        <S.Input
          type="text"
          placeholder="Insira uma descrição"
          {...register('description', {
            required: 'Este campo é obrigatório',
          })}
        />
        {errors.description && <S.ErrorText>{errors.description.message}</S.ErrorText>}

        <label>Data de Início:</label>

        <S.Input
          type="date"
          placeholder="Insira uma data de início"
          {...register('startDate', {
            required: 'Este campo é obrigatório',
          })}
        />
        {errors.startDate && <S.ErrorText>{errors.startDate.message}</S.ErrorText>}

        <label>Data de Término:</label>

        <S.Input
          type="date"
          placeholder="Insira uma data final"
          {...register('endDate', {
            required: 'Este campo é obrigatório',
          })}
        />
        {errors.endDate && <S.ErrorText>{errors.endDate.message}</S.ErrorText>}

        <button type='submit'>Registrar Evento</button>

      </S.AuthForm>
    </S.Container>
  );
};
