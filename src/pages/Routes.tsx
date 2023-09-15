import React from "react"
import { Routes, Route } from "react-router-dom"
import { Cadastro } from "./Register"
import { Login } from "./Login"
import { Home } from "./Home"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cadastro" element={<Cadastro />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    )
}