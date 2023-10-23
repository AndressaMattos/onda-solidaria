import React, { ReactNode } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import * as S from './style'

export const Header = () => {

    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    }

    return (
        <S.Header>
            <Link to={'/'}>
                Onda Solidaria
            </Link>
            {
                currentUser ? (
                    <nav>
                        <span> Logado como: <strong>{currentUser.email}</strong></span>
                        <Link to={'/events'}>
                            Meus Eventos
                        </Link>
                        <Link to={'/events/register'}>
                            Cadastre seu evento!
                        </Link>
                        <button onClick={handleLogout}> Deslogar </button>
                    </nav>
                ) : (
                    <nav>
                        <Link to={'/login'}>
                            Quer cadastrar seu evento? Clica aqui!
                        </Link>
                    </nav>
                )
            }
        </S.Header>
    )
}
