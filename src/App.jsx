import React from "react";
import Products from "./componets/commerce/Products";
import Category from "./componets/layout/Category";
import Footer from "./componets/layout/Footer";
import Header from "./componets/layout/Header";
import Home from "./componets/layout/Home";
import Teste3 from "./componets/Teste3";
import "./global.css";

function App() {
    return (
        <div className="app">
            <Header />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
