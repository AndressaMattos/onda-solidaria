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
                Onda Solidária
            </Link>
            {
                currentUser ? (
                    <nav>

                     <p>   <span> Logado como: <strong>{currentUser.email}</strong></span> </p>
                    <p>   <Link to={'/events'}> Meus Eventos </Link> </p>
                    <p>   <Link to={'/events/register'}> Cadastre seu evento! </Link> </p>
                    <p>   <button onClick={handleLogout}> Deslogar </button> </p>
            
                    </nav>
                ) : (
                    <nav>
                     <p>   <Link to={'/login'}> Quer cadastrar seu evento? Clica aqui! </Link></p>
                    </nav>
                )
            }
        </S.Header>
    )
}
