import React from "react"
import { Routes, Route } from "react-router-dom"
import { Login } from "./Login/Login"
import { Events } from "./Events/ListEvents"
import { RegisterEvent } from "./Events/RegisterEvent"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Events />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register-event" element={< RegisterEvent/>}/>
        </Routes>
    )
}