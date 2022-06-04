import React from "react";

function Teste() {
    const [pesquisa, setPesquisa] = React.useState("");

    function navigationProduct(event) {
        setPesquisa(event.target.value);
    }

    return (
        <div>
            <header style={{ height: "20vh" }}>
                menu
                <input
                    type="text"
                    value={pesquisa}
                    onChange={navigationProduct}
                />
                <a href={`#${pesquisa}`}>pesquisar</a>
            </header>
            <section style={{ height: "120vh" }}>seção</section>
            <footer id="footer">Rodapé</footer>
        </div>
    );
}

export default Teste;
