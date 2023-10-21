import React, { useEffect, useState } from 'react';
import EventsService from '../../services/EventsService';
import { FormValues } from '../../@types/forms';
import * as S from './styles';

export const Events = () => {
    const [events, setEvents] = useState<FormValues[]>([]); 
    const eventsService = new EventsService();
    
    useEffect(() => {
        const fetchData = async () => {
            const events = await eventsService.listEvents();
            setEvents(events);
        };
        fetchData();
    }, [])

    return (
        <>
            <h1>Confira os principais eventos que estão acontecendo!</h1>
            <S.Cards>
                {
                    events.map((event: FormValues) => {
                        return (
                            <S.Card key={event.address}>
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