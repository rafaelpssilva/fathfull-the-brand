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
        {
            id: "1",
            name: "Farrah bikini top",
            price: "1.797.212",
            img: Farrah,
            alt: "biquini laranja e preto com formato de zebra",
            color: "yellow",
        },
        {
            id: "2",
            name: "Josca one piece",
            price: "3.310.713",
            img: Josca,
            alt: "biquini preto",
            color: "black",
        },
        {
            id: "3",
            name: "Rossi bikini top",
            price: "2.103.819",
            img: Rossi,
            alt: "biquini azul",
            color: "blue",
        },
        {
            id: "4",
            name: "Solene one piece",
            price: "3.107.411",
            img: Solene,
            alt: "biquini amarelo com listras brancas",
            color: "yellow",
        },
        // {
        //     id: "5",
        //     name: "Farrah bikini top",
        //     price: "1.797.212",
        //     img: Farrah,
        //     alt: "biquini laranja e preto com formato de zebra",
        // },
        // {
        //     id: "6",
        //     name: "Josca one piece",
        //     price: "3.310.713",
        //     img: Josca,
        //     alt: "biquini preto",
        // },
        // {
        //     id: "7",
        //     name: "Rossi bikini top",
        //     price: "2.103.819",
        //     img: Rossi,
        //     alt: "biquini azul",
        // },
        // {
        //     id: "8",
        //     name: "Solene one piece",
        //     price: "3.107.411",
        //     img: Solene,
        //     alt: "biquini amarelo com listras brancas",
        // },
        // {
        //     id: "9",
        //     name: "Farrah bikini top",
        //     price: "1.797.212",
        //     img: Farrah,
        //     alt: "biquini laranja e preto com formato de zebra",
        // },
        // {
        //     id: "10",
        //     name: "Josca one piece",
        //     price: "3.310.713",
        //     img: Josca,
        //     alt: "biquini preto",
        // },
        // {
        //     id: "11",
        //     name: "Rossi bikini top",
        //     price: "2.103.819",
        //     img: Rossi,
        //     alt: "biquini azul",
        // },
        // {
        //     id: "12",
        //     name: "Solene one piece",
        //     price: "3.107.411",
        //     img: Solene,
        //     alt: "biquini amarelo com listras brancas",
        // },
    ];

    const productsReturn = products.map(
        ({ id, name, price, img, alt, color }) =>
            colorSelector == "color" ? (
                <div id={id} className="product" key={name + Math.random()}>
                    <img src={img} alt={alt} />
                    <p className="product-name">{name}</p>
                    <p className="product-price">{price}</p>
                </div>
            ) : (
                colorSelector == color && (
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
