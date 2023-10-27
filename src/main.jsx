import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Modal from 'react-modal';

import { AuthProvider } from "./contexts/AuthContext";

const rootElement = document.getElementById('root');

Modal.setAppElement(rootElement);


ReactDOM.createRoot(rootElement).render(
 <React.StrictMode>
  <AuthProvider>
    <App />
  </AuthProvider>
  </React.StrictMode>,
)


