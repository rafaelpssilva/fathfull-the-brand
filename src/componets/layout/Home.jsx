import React from "react";
import Products from "../commerce/Products";
import FiltersGroup from "../outhers/FiltersGroup";
import Category from "./Category";

import { GlobalContext } from "../../GlobalContext";

function Home() {
    const [priceSelector, setPriceSelector] = React.useState("price");
    const [colorSelector, setColorSelector] = React.useState("color");
    const [sizeSelector, setSizeSelector] = React.useState("size");
    const [genderSelector, setGenderSelector] = React.useState("gender");
    const [seasonsSelector, setSeasonsSelector] = React.useState("seasons");

    return (
        <>
            <section className="home wrapper">
                <h1 className="home-title">/ Popular Products</h1>

                <hr />

                <div className="home-category">
                    <div className="categories-group">
                        <h3>Categories:</h3>
                        <select name="categories" id="categories-models">
                            <option value="swin">Swin</option>
                        </select>
                    </div>

                    <FiltersGroup
                        priceSelector={priceSelector}
                        setPriceSelector={setPriceSelector}
                        colorSelector={colorSelector}
                        setColorSelector={setColorSelector}
                        sizeSelector={sizeSelector}
                        setSizeSelector={setSizeSelector}
                        genderSelector={genderSelector}
                        setGenderSelector={setGenderSelector}
                        seasonsSelector={seasonsSelector}
                        setSeasonsSelector={setSeasonsSelector}
                    />
                </div>
            </section>
            <Category />
            <Products />
        </>
    );
}

export default Home;
