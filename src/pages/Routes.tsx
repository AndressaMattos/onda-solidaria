import React from "react"
import { Routes, Route } from "react-router-dom"
import { Login } from "./Login/Login"
import { Events } from "./Events/ListEvents"
import { RegisterEvent } from "./Events/RegisterEvent"

export const Router = () => {
    return (
        <Routes>
            <Route path="/AllEvents" element={<Events />}/>
            <Route path="/Login" element={<Login />}/>
            <Route path="/RegisterEvent" element={< RegisterEvent/>}/>
        </Routes>
    )
}