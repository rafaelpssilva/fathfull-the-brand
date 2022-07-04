import React from "react";
import dataProducts from "../../data/dataProducts";
import { GlobalContext } from "../../GlobalContext";

function Products() {
    const {
        priceSelector,
        colorSelector,
        sizeSelector,
        genderSelector,
        seasonsSelector,
        navFillter,
    } = React.useContext(GlobalContext);

    console.log(navFillter);

    const fill = navFillter;

    const categoryProducts = dataProducts.filter((p) =>
        p.classification.includes(fill)
    );

    const productsReturn = categoryProducts.map(
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
