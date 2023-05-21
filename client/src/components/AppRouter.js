import React, { useContext, useState } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import { adminRoutes, authRoutes, publicRoutes } from '../routes';
import { DISTRICTS_ROUTE } from '../utils/consts';
import { Context } from '..';
import { check } from '../http/userApi';

const AppRouter = () =>{
    const {user} = useContext(Context);
    const [role, setRole] = useState('')
    check().then(data => setRole(data.role))
    return(
        <Routes>
            {role === "ADMIN" && adminRoutes.map(({path, Component}) =>
                <Route key = {path} path = {path} element = {<Component/>} exact/>
            )}
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key = {path} path = {path} element = {<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key = {path} path = {path} element = {<Component/>} exact/>
            )}
            <Route path = "*" element={<Navigate to = {DISTRICTS_ROUTE}/>}/>
        </Routes>
    );
}

export default AppRouter;