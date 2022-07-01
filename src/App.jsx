import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./componets/layout/Footer";
import Header from "./componets/layout/Header";
import Home from "./componets/layout/Home";

import Cart from "./componets/layout/Cart";
import Sale from "./componets/commerce/Sale";

import "./global.css";

function App() {
    return (
        <div className="app">
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/sale" element={<Sale />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
