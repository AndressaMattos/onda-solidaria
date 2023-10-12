import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import EventsService from '../../../services/EventsService'; // Importe a classe EventsService
import { useAuth } from '../../../AuthContext';

type FormValues = {
  nameOng: string;
  city: string;
  state: string;
  address: string;
  description: string;
  startDate: string;
  endDate: string;
};

/*
  TODO: fazer a listagem dos eventos do usuário criado 
*/

export const RegisterEvent: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const [loading, setLoading] = useState(true);

  const [nameOng, setNameOng] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const eventsService = new EventsService();
  const [userEvents, setUserEvents] = useState<FormValues[]>([]); //lembrar de tipar com os itens retornados


  useEffect(() => {
    const fetchData = async () => {
      const userEventsFromDb = await eventsService.listEventsByUser(currentUser?.uid as string) as FormValues[];

      setUserEvents(userEventsFromDb);
      setLoading(false); // Defina o estado de carregamento como falso quando os dados estiverem prontos
      
    };
    fetchData();
  }, [loading])

  console.log(loading);
  

  console.log(currentUser?.uid);

  if (!currentUser) {
    return
  }


  const handleRegistration = async () => {
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
      // Limpe os campos após o registro bem-sucedido
      setNameOng('');
      setCity('');
      setState('');
      setAddress('');
      setDescription('');
      setStartDate('');
      setEndDate('');
    }
  };

  return (
    <div>
      <button onClick={logout}>Sair</button>
      <h2>Registro de Evento</h2>
      <label>Nome da ONG:</label>
      <input type="text" value={nameOng} onChange={(e) => setNameOng(e.target.value)} />

      <label>Cidade:</label>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />

      <label>Estado:</label>
      <input type="text" value={state} onChange={(e) => setState(e.target.value)} />

      <label>Endereço:</label>
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />

      <label>Descrição:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

      <label>Data de Início:</label>
      <input type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)} />

      <label>Data de Término:</label>
      <input type="text" value={endDate} onChange={(e) => setEndDate(e.target.value)} />

      <button onClick={handleRegistration}>Registrar Evento</button>

      <h3>Eventos do usuário logado: </h3>
      <ul>
        {loading ? ( // Mostrar indicador de carregamento enquanto os dados estão sendo buscados
          <p>Carregando eventos...</p>
        ) : userEvents?.length > 0 ? ( // Verificar se há eventos antes de renderizar
          userEvents?.map((event, index) => {
            return (
              <div key={index} style={{ display: "flex", flexDirection: "column" }}>
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
        ) : (
          <p>Não há eventos cadastrados</p>
        )}
      </ul>
    </div>
  );
};
