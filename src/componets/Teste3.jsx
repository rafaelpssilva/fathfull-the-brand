import React from "react";

function Teste3() {
    const [priceSelector, setPriceSelector] = React.useState("price");
    const [colorSelector, setColorSelector] = React.useState("color");
    const [sizeSelector, setSizeSelector] = React.useState("size");

    const objetos = [
        {
            namee: "notebook",
            color: "black",
            price: 1000.0,
            size: "p",
            caracteristicas: "1000.0 black medio color price size",
        },
        {
            namee: "smartphone",
            color: "blue",
            price: 2000.0,
            size: "m",
            caracteristicas: "2000.0 blue pequeno color price size",
        },
        {
            namee: "tv",
            color: "gray",
            price: 3000.0,
            size: "g",
            caracteristicas: "3000.0 gray grande color price size",
        },
    ];

    const filters = {
        price: {
            namee: "price",
            options: [1000.0, 2000.0, 3000.0],
        },
        color: {
            namee: "color",
            options: ["black", "blue", "gray"],
        },
        size: {
            namee: "size",
            options: ["pequeno", "medio", "grande"],
        },
    };
    return (
        <div>
            <h1>Produtos</h1>
            {objetos.map(({ namee, price, caracteristicas }) =>
                priceSelector === "price" &&
                colorSelector === "color" &&
                sizeSelector === "size" ? (
                    <div key={namee}>
                        <h2>{namee}</h2>
                        <p>{price}</p>
                    </div>
                ) : (
                    caracteristicas.includes(colorSelector) &&
                    caracteristicas.includes(priceSelector) &&
                    caracteristicas.includes(sizeSelector) && (
                        <div key={namee}>
                            <h2>{namee}</h2>
                            <p>{price}</p>
                        </div>
                    )
                )
            )}

            <select
                name={filters.price.namee}
                id={filters.price.namee}
                value={priceSelector}
                onChange={({ target }) => setPriceSelector(target.value)}
            >
                <option>{filters.price.namee}</option>
                {filters.price.options.map((opt) => (
                    <option value={opt} key={opt}>
                        {opt}
                    </option>
                ))}
            </select>

            <select
                name={filters.color.namee}
                id={filters.color.namee}
                value={colorSelector}
                onChange={({ target }) => setColorSelector(target.value)}
            >
                <option>{filters.color.namee}</option>
                {filters.color.options.map((opt) => (
                    <option value={opt} key={opt}>
                        {opt}
                    </option>
                ))}
            </select>

            <select
                name={filters.size.namee}
                id={filters.size.namee}
                value={sizeSelector}
                onChange={({ target }) => setSizeSelector(target.value)}
            >
                <option>{filters.size.namee}</option>
                {filters.size.options.map((opt) => (
                    <option value={opt} key={opt}>
                        {opt}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Teste3;
