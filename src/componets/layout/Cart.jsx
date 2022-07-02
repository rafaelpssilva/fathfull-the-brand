import React from "react";
import { Link } from "react-router-dom";

function Cart({ preco }) {
    return (
        <section className="cart">
            <h2>Você ainda não comprou nada {preco}</h2>
            <Link to="/">Voltar a loja</Link>
        </section>
    );
}

export default Cart;
