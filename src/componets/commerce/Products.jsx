import React from "react";

// VESTIDO
import VestidoPreguado from "../../assets/products-img/vestidos/vestido-justo-preguado-de-um-ombro.jpeg";
import VestidoFranzido from "../../assets/products-img/vestidos/vestido-justo-franzido-com-cordao-2.jpeg";
import VestidoCordaoTubo from "../../assets/products-img/vestidos/vestido-cordao-tubo-simples.jpeg";
import VestidoSimplesTubo from "../../assets/products-img/vestidos/vestido-tubo-simples.jpeg";
import VestidoRuchedTubo from "../../assets/products-img/vestidos/vestido-tubo-busto-ruched-simples-sexy.jpeg";
import VestidoCanelado from "../../assets/products-img/vestidos/vestido-canelado-com-bainha-dividida.jpeg";

// JAQUETAS
import JaquetaBlack from "../../assets/products-img/jaquetas/jaqueta-black.jpg";
import JaquetaBomber from "../../assets/products-img/jaquetas/jaqueta-bomber.jpg";
import JaquetaBordado from "../../assets/products-img/jaquetas/jaqueta-bordado.jpg";
import JaquetaFormal from "../../assets/products-img/jaquetas/jaqueta-formal.jpg";

// CALÇAS
import CalcaNasa from "../../assets/products-img/calcas/calca-cargo-nasa.jpeg";
import CalcaTieDyeSlogan from "../../assets/products-img/calcas/calca-moletom-tie-dye-slogan.jpg";
import CalcaTieDye from "../../assets/products-img/calcas/calca-moletom-tie-dye.jpeg";

function Products({
    priceSelector,
    colorSelector,
    sizeSelector,
    genderSelector,
    seasonsSelector,
}) {
    const products = [
        // Oganização produtos: price color size gender seasons
        // {
        //     id: "1",
        //     name: "Farrah bikini top",
        //     price: "1.797.212",
        //     img: Farrah,
        //     alt: "biquini laranja e preto com formato de zebra",
        //     color: "yellow",
        //     caracteristicas:
        //         "1.797 orange black small medium large woman summer price color size gender seasons",
        // },
        // {
        //     id: "2",
        //     name: "Josca one piece",
        //     price: "3.310.713",
        //     img: Josca,
        //     alt: "biquini preto",
        //     color: "black",
        //     caracteristicas:
        //         "3.310 black small medium large woman summer price color size gender seasons",
        // },
        // {
        //     id: "3",
        //     name: "Rossi bikini top",
        //     price: "2.103.819",
        //     img: Rossi,
        //     alt: "biquini azul",
        //     color: "blue",
        //     caracteristicas:
        //         "2.103 blue small medium large men summer price color size gender seasons",
        // },
        // {
        //     id: "4",
        //     name: "Solene one piece",
        //     price: "3.107.411",
        //     img: Solene,
        //     alt: "biquini amarelo com listras brancas",
        //     color: "yellow",
        //     caracteristicas:
        //         "3.310 yellow small medium large men summer price color size gender seasons",
        // },
        {
            id: "1",
            name: "Vestido tubo simples",
            price: "1.797.212",
            img: VestidoSimplesTubo,
            alt: "vestido preto simples ocasional",
            color: "black",
            caracteristicas:
                "1.797 black small medium large woman summer price color size gender seasons",
        },
        {
            id: "2",
            name: "Vestido tubo cordão",
            price: "3.310.713",
            img: VestidoCordaoTubo,
            alt: "vestido beige tubo simples",
            color: "beige",
            caracteristicas:
                "3.310 beige small medium large woman summer price color size gender seasons",
        },
        {
            id: "3",
            name: "Vestido preguado",
            price: "2.103.819",
            img: VestidoPreguado,
            alt: "vestido preto preguado",
            color: "black",
            caracteristicas:
                "2.103 black small medium large woman summer price color size gender seasons",
        },
        {
            id: "4",
            name: "Vestido franzido",
            price: "3.107.411",
            img: VestidoFranzido,
            alt: "vestido preto franzido",
            color: "black",
            caracteristicas:
                "3.310 black small medium large woman summer price color size gender seasons",
        },
        {
            id: "5",
            name: "Vestido ruched",
            price: "4.107.411",
            img: VestidoRuchedTubo,
            alt: "vestido preto ruched",
            color: "black",
            caracteristicas:
                "4.107 black small medium large woman summer price color size gender seasons",
        },
        {
            id: "6",
            name: "Vestido canelado",
            price: "2.107.411",
            img: VestidoCanelado,
            alt: "vestido preto canelado",
            color: "black",
            caracteristicas:
                "2.107 black small medium large woman summer price color size gender seasons",
        },
        {
            id: "7",
            name: "Jaqueta black",
            price: "2.107.411",
            img: JaquetaBlack,
            alt: "jaqueta preta",
            color: "black",
            caracteristicas:
                "2.107 black small medium large men winter price color size gender seasons",
        },
        {
            id: "8",
            name: "jaqueta bomber",
            price: "2.107.411",
            img: JaquetaBomber,
            alt: "jaqueta bomber",
            color: "green",
            caracteristicas:
                "2.107 green white small medium large men winter price color size gender seasons",
        },
        {
            id: "9",
            name: "Jaqueta bordado",
            price: "2.107.411",
            img: JaquetaBordado,
            alt: "jaqueta bordado",
            color: "black",
            caracteristicas:
                "2.107 black gray small medium large men winter price color size gender seasons",
        },
        {
            id: "10",
            name: "Jaqueta formal",
            price: "2.107.411",
            img: JaquetaFormal,
            alt: "jaqueta formal",
            color: "brown",
            caracteristicas:
                "2.107 brown white small medium large men winter price color size gender seasons",
        },
        {
            id: "11",
            name: "Cargo Nasa",
            price: "2.107.411",
            img: CalcaNasa,
            alt: "calca cargo com logo da nasa",
            color: "black",
            caracteristicas:
                "2.107 black small medium large men winter price color size gender seasons",
        },
        {
            id: "12",
            name: "Moletom Slogan",
            price: "2.107.411",
            img: CalcaTieDyeSlogan,
            alt: "calca moletom estampada",
            color: "black",
            caracteristicas:
                "2.107 black small medium large men winter price color size gender seasons",
        },
        {
            id: "13",
            name: "Moletom tie dye",
            price: "2.107.411",
            img: CalcaTieDye,
            alt: "calca tie dye",
            color: "jeans",
            caracteristicas:
                "2.107 jeans small medium large men winter price color size gender seasons",
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
