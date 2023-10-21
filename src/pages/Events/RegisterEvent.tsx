import React from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import EventsService from '../../services/EventsService';
import { useAuth } from '../../contexts/AuthContext';
import { zodResolver } from '@hookform/resolvers/zod'
import { formattedDate } from '../../utils/formatDate';
import { eventSchema, newEventSchema } from '../../@types/events';
import * as S from './styles';
import Swal from 'sweetalert2';

export const RegisterEvent: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<eventSchema>({
    resolver: zodResolver(newEventSchema),
  });
  const navigate = useNavigate();
  const eventsService = new EventsService();
  const todayDate = formattedDate(new Date());

  if (!currentUser) {
    Swal.fire({
      title: 'Erro!',
      text: 'Você precisa estar logado para registrar um evento!',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
    navigate('/login');
  }


  const handleRegistration = async (data: eventSchema) => {
    if (data?.startDate > data?.endDate) {
      Swal.fire({
        title: 'Error!',
        text: 'A data de início não pode ser maior que a data de término!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return;
    }

    const newEvent = {
      ...data,
      userId: currentUser?.uid
    }

    try {
      await eventsService.createEvent(newEvent);
      Swal.fire({
        title: 'Sucesso!',
        text: 'Evento criado com sucesso!',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Algum erro ocorreu ao criar o evento!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  };

  return (
    <S.Container>
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
          defaultValue={todayDate}
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
