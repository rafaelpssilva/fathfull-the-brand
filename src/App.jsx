import React from "react";
import Products from "./componets/commerce/Products";
import Category from "./componets/layout/Category";
import Footer from "./componets/layout/Footer";
import Header from "./componets/layout/Header";
import Home from "./componets/layout/Home";
import "./global.css";

function App() {
    return (
        <div className="app">
            <Header />
            <Home />
            <Category />
            <Products />
            <Footer />
        </div>
    );
}

export default App;
