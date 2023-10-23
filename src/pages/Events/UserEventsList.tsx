import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EventsService from '../../services/EventsService';
import * as S from './styles'
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom'
import { FormValues } from '../../@types/forms';
import Swal from 'sweetalert2';
import { formattedDateToBr } from '../../utils/formatDate';


export const UserEventsList = () => {
    const { currentUser, logout } = useAuth();
    const [loading, setLoading] = useState(true);
    const [userEvents, setUserEvents] = useState<FormValues[]>([]);
    const eventsService = new EventsService();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const userEventsFromDb = await eventsService.listEventsByUser(currentUser?.uid as string) as FormValues[];
            setUserEvents(userEventsFromDb);
            setLoading(false);
        };
        fetchData();   
    }, [])
   
    if (!currentUser) {
        Swal.fire({
            title: 'Erro!',
            text: 'Você precisa estar logado para ver seus eventos!',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
        navigate('/login')
    }

    const handleDeleteEvent = async (id: string) => {
        try {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            })
            swalWithBootstrapButtons.fire({
                title: 'Você tem certeza?',
                text: "Você não poderá reverter essa ação!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sim, apagar!',
                cancelButtonText: 'Não, cancelar',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    eventsService.deleteEventById(id);
                    const updatedEvents = userEvents.filter(event => event.id !== id);
                    setUserEvents(updatedEvents);
                    swalWithBootstrapButtons.fire(
                        'Deletado!',
                        'O evento foi deletado com sucesso',
                        'success'
                    )
                   
                } 
            })
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Error deleting event!',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    }

    return (
        <S.Cards>
            {!loading ? (
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
                                <span>{formattedDateToBr(event.startDate)}</span>
                                <span>{formattedDateToBr(event.endDate)}</span>
                            </div>
                            <Link to={`/events/${event.id}`}>Atualizar dados</Link>
                            <S.Button onClick={() => handleDeleteEvent(event.id as string)}>Deletar Evento</S.Button>
                        </S.Card>
                    )
                })
            ) : (
                <p>Não há eventos cadastrados</p>
            )}
        </S.Cards>
    )
}