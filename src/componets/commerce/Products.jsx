import React from "react";

import Farrah from "../../assets/products-img/farrah.jpg";
import Josca from "../../assets/products-img/josca.jpg";
import Rossi from "../../assets/products-img/rossi.jpg";
import Solene from "../../assets/products-img/solene.jpg";

function Products({
    priceSelector,
    colorSelector,
    sizeSelector,
    genderSelector,
    seasonsSelector,
}) {
    const products = [
        // Oganização produtos: price color size gender seasons
        {
            id: "1",
            name: "Farrah bikini top",
            price: "1.797.212",
            img: Farrah,
            alt: "biquini laranja e preto com formato de zebra",
            color: "yellow",
            caracteristicas:
                "1.797 orange black small medium large woman summer price color size gender seasons",
        },
        {
            id: "2",
            name: "Josca one piece",
            price: "3.310.713",
            img: Josca,
            alt: "biquini preto",
            color: "black",
            caracteristicas:
                "3.310 black small medium large woman summer price color size gender seasons",
        },
        {
            id: "3",
            name: "Rossi bikini top",
            price: "2.103.819",
            img: Rossi,
            alt: "biquini azul",
            color: "blue",
            caracteristicas:
                "2.103 blue small medium large men summer price color size gender seasons",
        },
        {
            id: "4",
            name: "Solene one piece",
            price: "3.107.411",
            img: Solene,
            alt: "biquini amarelo com listras brancas",
            color: "yellow",
            caracteristicas:
                "3.310 yellow small medium large men summer price color size gender seasons",
        },
    ];

    const productsReturn = products.map(
        ({ id, name, price, img, alt, caracteristicas }) =>
            priceSelector === "price" &&
            colorSelector === "color" &&
            sizeSelector === "size" &&
            genderSelector === "gender" &&
            seasonsSelector === "seasons" ? (
                <div id={id} className="product" key={name + Math.random()}>
                    <img src={img} alt={alt} />
                    <p className="product-name">{name}</p>
                    <p className="product-price">{price}</p>
                </div>
            ) : (
                caracteristicas.includes(colorSelector) &&
                caracteristicas.includes(sizeSelector) &&
                caracteristicas.includes(genderSelector) &&
                caracteristicas.includes(seasonsSelector) &&
                price <= priceSelector && (
                    <div id={id} className="product" key={name + Math.random()}>
                        <img src={img} alt={alt} />
                        <p className="product-name">{name}</p>
                        <p className="product-price">{price}</p>
                    </div>
                )
            )
    );

    return <section className="products wrapper">{productsReturn}</section>;
}

export default Products;
