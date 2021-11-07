import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Product from "./Pages/Point";
import RegisterPoint from "./Pages/Register";


const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route component={Home} path="/" exact />
                <Route component={RegisterPoint} path="/register" />
                <Route component={Product} path="/point" />
                <Route component={ Login } path="/login" />
            </Routes>
        </Router>
    )
}

export default Rotas;
