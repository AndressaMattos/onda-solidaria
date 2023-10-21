import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { Events } from "../pages/Events/ListEvents"
import { PageNotFound } from "../pages/NotFound"
import { Login } from "../pages/Login/Login"
import { RegisterEvent } from "../pages/Events/RegisterEvent"
import { UserEventsList } from "../pages/Events/UserEventsList"
import { UpdateUserEvent } from "../pages/Events/UpdateUserEvent"
import { Layout } from "./layout"


export const Router = () => {

    const { currentUser } = useAuth();

    console.log(currentUser?.uid)

    return (
        <BrowserRouter>
            <Routes>
                {
                    currentUser?.uid ? (
                        <Route element={<Layout />}>
                            <Route path="/" element={<Events />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/events" element={<UserEventsList />} />
                            <Route path="/events/register" element={< RegisterEvent />} />
                            <Route path="/events/:id" element={<UpdateUserEvent />} />
                            <Route path="*" element={<PageNotFound />} />
                        </Route>
                    ):(
                            <Route>
                                <Route element={ <Layout /> }>
                                    <Route path="/" element={<Events />} />
                                </Route>
                                <Route path="/login" element={<Login />} />
                                <Route path="*" element={<PageNotFound />} />
                            </Route>
                    ) 
                }

            </Routes>
        </BrowserRouter>
    )
}