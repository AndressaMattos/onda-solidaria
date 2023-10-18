import React from 'react';
import { useForm } from 'react-hook-form'
import EventsService from '../../../services/EventsService';
import { useAuth } from '../../contexts/AuthContext';
import * as S from './styles';
import { Link } from 'react-router-dom';

type FormValues = {
  nameOng: string;
  city: string;
  state: string;
  address: string;
  description: string;
  startDate: Date;
  endDate: Date;
};

/*
  TODO: fazer a listagem dos eventos do usuário criado 
*/

export const RegisterEvent: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  console.log(currentUser?.uid);

  if (!currentUser) {
    return
  }



  const handleRegistration = async (data: FormValues) => {
    console.log(data);
    const { nameOng, city, state, address, description, startDate, endDate } = data;
    const eventsService = new EventsService();
    const success = await eventsService.createEvent(
      currentUser.uid,
      nameOng,
      city,
      state,
      address,
      description,
      startDate,
      endDate
    );
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
        <label>Nome da ONG:</label>
        <S.Input
          type="text"
          placeholder="Insira o nome da ONG"
          {...register('nameOng', {
            required: 'Este campo é obrigatório',
          })}
        />
        {errors.nameOng && <S.ErrorText>{errors.nameOng.message}</S.ErrorText>}

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
