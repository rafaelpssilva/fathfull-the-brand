import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teste from "./Teste";
import Teste2 from "./Teste2";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./layout/Home";
import Cart from "./layout/Cart";
import Sale from "./commerce/Sale";

function Teste4() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/sale" element={<Sale />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default Teste4;
