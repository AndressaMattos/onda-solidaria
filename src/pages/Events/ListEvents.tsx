import React, { useEffect, useState } from 'react';
import EventsService from '../../services/EventsService';
import * as S from './styles';
import { FormValues } from '../../@types';

export const Events = () => {

    const eventsService = new EventsService();
    const [isLoading, setIsLoading] = useState(true);
    const [events, setEvents] = useState<any[]>([]); //lembrar de tipar com os itens retornados

    useEffect(() => {
        const fetchData = async () => {
            const events = await eventsService.listEvents();
            setEvents(events);
            setIsLoading(false);
        };
        fetchData();
    }, [])

    if (isLoading) {
        return <p>Carregando.... </p>
    }

    return (
        <>
            <h1>Confira os principais eventos que estão acontecendo!</h1>
            <S.Cards>
                {
                    events.map((event: FormValues) => {
                        return (
                            <S.Card>
                                <h2>{event.eventName}</h2>
                                <div className='event-infos'>
                                    <span>{event.city}</span>
                                    <span>{event.state}</span>
                                    <span>{event.address}</span>
                                    <span>{event.description}</span>
                                </div>
                                <div className='event-dates'>
                                    <span>{event.startDate.toString()}</span>
                                    <span>{event.endDate.toString()}</span>
                                </div>
                            </S.Card>
                        )
                    })
                }
            </S.Cards>
        </>
    )
}