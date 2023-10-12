import React, { useEffect, useState } from 'react';
import EventsService from '../../../services/EventsService';

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

    if(isLoading) {
        return <p>Carregando.... </p>
    }


    console.log(events);
    return (
        <>
            <h1>Página de listagem dos eventos da ong (usuário) </h1>
            {
                events.map((event) => {
                    return (
                        <div style={{display: "flex"}}>
                            <h2>{event.nameOng}</h2>
                            <p>{event.city}</p>
                            <p>{event.state}</p>
                            <p>{event.address}</p>
                            <p>{event.description}</p>
                            <p>{event.startDate}</p>
                            <p>{event.endDate}</p>
                        </div>
                    )
                })
            }  
        </>
    )
}