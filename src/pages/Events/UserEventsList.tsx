import React, {useState, useEffect} from 'react';
import EventsService from '../../services/EventsService';
import * as S from './styles'
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom'
import { FormValues } from '../../@types';


export const UserEventsList = () => {
    const { currentUser, logout } = useAuth();
    const [loading, setLoading] = useState(true);
    const eventsService = new EventsService();  //ver isso aq
    const [userEvents, setUserEvents] = useState<FormValues[]>([]); //lembrar de tipar com os itens retornados

    useEffect(() => {
        const fetchData = async () => {
            const userEventsFromDb = await eventsService.listEventsByUser(currentUser?.uid as string) as FormValues[];

            setUserEvents(userEventsFromDb);
            setTimeout(() => {
                setLoading(false); // Defina o estado de carregamento como falso quando os dados estiverem prontos
            }, 1000)
        };
        fetchData();
    }, [currentUser?.uid])

    if (loading) {
        return <p>Carregando.... </p>
    }

    if (!currentUser) {
        return
    }

    return (
        <>
            <Link to="/register-event">Voltar a página anterior</Link>
            <S.Cards>
                {!loading ? ( // Mostrar indicador de carregamento enquanto os dados estão sendo buscados
                    userEvents?.map((event, index) => {
                        return (
                            <S.Card key={index}>
                                <h2>{event.eventName}</h2>
                                <div className='event-infos'>
                                    <span>{event.city}</span>
                                    <span>{event.state}</span>
                                    <span>{event.address}</span>
                                    <span>{event.description}</span>
                                </div>
                                <div className='event-dates'>
                                    <span>{new Date(event.startDate).toDateString()}</span>
                                    <span>{new Date(event.endDate).toDateString()}</span>
                                </div>
                                <Link to={`/events/${event.id}`}>Update Event</Link>
                            </S.Card>
                        )
                    })
                ) : (
                    <p>Não há eventos cadastrados</p>
                )}
            </S.Cards>
        </>
    )
}