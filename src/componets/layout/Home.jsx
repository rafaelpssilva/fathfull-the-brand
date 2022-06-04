import React from "react";

function Home() {
    const filters = [
        {
            filter: "price",
        },
        {
            filter: "color",
        },
        {
            filter: "size",
        },
        {
            filter: "gender",
        },
        {
            filter: "seasons",
        },
    ];
    return (
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

                <div className="filters-group">
                    <h3>Filters</h3>
                    {filters.map(({ filter }) => (
                        <select key={filter} name={filter} id={filter}>
                            <option value={filter}>{filter}</option>
                        </select>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Home;
