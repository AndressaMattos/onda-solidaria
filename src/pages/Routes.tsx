import React from "react"
import { Routes, Route } from "react-router-dom"
import { Cadastro } from "./Register"
import { Login } from "./Login/Login"
import { Home } from "./Home"

export const Router = () => {
    return (
        <Routes>
            <Route path="/Eventos" element={<Home />}/>
            <Route path="/Cadastro" element={<Cadastro />}/>
            <Route path="/Login" element={<Login />}/>
        </Routes>
    )
}