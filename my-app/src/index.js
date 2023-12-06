import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Login from "./login/Login";
import SignUp from "./login/SignUp";
import Home from "./login/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<App />} />
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/signup'} element={<SignUp/>}/>
            <Route path={'/home'} element={<Home/>}/>
        </Routes>
    </BrowserRouter>
);

reportWebVitals();
