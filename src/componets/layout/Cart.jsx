import React from "react";
import { Link } from "react-router-dom";

function Cart() {
    return (
        <section className="cart">
            <h2>Você ainda não comprou nada</h2>
            <Link to="/">Voltar a loja</Link>
        </section>
    );
}

export default Cart;
