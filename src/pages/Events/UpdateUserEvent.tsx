import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import EventsService from '../../services/EventsService';
import { useForm } from 'react-hook-form';
import * as S from './styles';
import { FormValues } from '../../@types';


export const UpdateUserEvent = () => {
    const { id } = useParams();

    console.log(id)

    const [userEvent, setUserEvent] = useState<FormValues[]>([]); //lembrar de tipar com os itens retornados

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();

    const eventsService = new EventsService();  //ver isso aq

    useEffect(() => {
        const fetchData = async () => {
            const userEventsFromDb = await eventsService.listEventById(id as string) as FormValues[];

            setUserEvent(userEventsFromDb);
        };
        fetchData();
    }, [])

    useEffect(() => {
        if(userEvent){
            reset({
                eventName: userEvent[0]?.eventName,
                city: userEvent[0]?.city,
                state: userEvent[0]?.state,
                address: userEvent[0]?.address,
                description: userEvent[0]?.description,
                startDate: userEvent[0]?.startDate,
                endDate: userEvent[0]?.endDate,
            })
        }
    }, [userEvent]);

    console.log(userEvent);

    const handleUpdateEvent = async (data: FormValues) => {
        console.log(data);
        await eventsService.updateEvent(data, id as string);
       
        alert('Evento atualizado com sucesso!');
        
    }
    

    return (
        <S.Container>
            <Link to={'/events'}>Ver eventos</Link>
            <h2>Atualização de eventos</h2>

            <S.AuthForm onSubmit={handleSubmit(handleUpdateEvent)}>
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
    )
}