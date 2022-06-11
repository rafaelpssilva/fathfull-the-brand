import React from "react";

function Teste2() {
    const [filtro, setFiltro] = React.useState("1");

    function handleClick(event) {
        setFiltro(event.target.innerText);
    }

    const obj1 = [
        {
            id: 1,
            description: "1",
        },
        {
            id: 1,
            description: "11",
        },
        {
            id: 1,
            description: "111",
        },
        {
            id: 1,
            description: "1111",
        },
        {
            id: 2,
            description: "bbbbbbb",
        },
        {
            id: 3,
            description: "ccccccc",
        },
    ];

    return (
        <div>
            {obj1.map(({ id, description }) => (
                <div key={description + Math.random()}>
                    <h2>{id == filtro && id}</h2>
                    <p>{id == filtro && description}</p>
                </div>
            ))}
            <button onClick={(event) => handleClick(event)}>1</button>
            <button onClick={(event) => handleClick(event)}>2</button>
            <button onClick={(event) => handleClick(event)}>3</button>
        </div>
    );
}

export default Teste2;
