import React, { useState } from 'react';
import EventsService from '../../../services/EventsService'; // Importe a classe EventsService

export const RegisterEvent: React.FC = () => {
  const [nameOng, setNameOng] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleRegistration = async () => {
    const eventsService = new EventsService();
    const success = await eventsService.createEvent(
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
    </div>
  );
};
