import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStorage } from "./GlobalContext";

import Footer from "./componets/layout/Footer";
import Header from "./componets/layout/Header";
import Home from "./componets/layout/Home";

import Cart from "./componets/layout/Cart";
import Sale from "./componets/commerce/Sale";

import "./global.css";
import Teste5 from "./componets/Teste5";

function App() {
    return (
        <div className="app">
            <GlobalStorage>
                <Router>
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/sale" element={<Sale />} />
                    </Routes>
                    <Footer />
                </Router>
            </GlobalStorage>
        </div>
    );
}

export default App;
