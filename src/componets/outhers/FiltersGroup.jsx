import React from "react";

function FiltersGroup({
    priceSelector,
    setPriceSelector,
    colorSelector,
    setColorSelector,
    sizeSelector,
    setSizeSelector,
    genderSelector,
    setGenderSelector,
    seasonsSelector,
    setSeasonsSelector,
}) {
    const filters = {
        price: {
            name: "price",
            options: ["1.000", "2.000", "3.000", "4.000"],
        },
        color: {
            name: "color",
            options: [
                "white",
                "black",
                "gray",
                "brown",
                "beige",
                "jeans",
                "red",
                "green",
                "blue",
                "light blue",
                "pink",
            ],
        },
        size: {
            name: "size",
            options: ["p", "m", "g", "gg"],
        },
        gender: {
            name: "gender",
            options: ["woman", "men"],
        },
        seasons: {
            name: "seasons",
            options: ["winter", "summer"],
        },
    };

    return (
        <div className="filters-group">
            <h3>Filters:</h3>
            <select
                name={filters.price.name}
                id={filters.price.name}
                value={priceSelector}
                onChange={({ target }) => setPriceSelector(target.value)}
            >
                <option value={filters.price.name}>{filters.price.name}</option>
                {filters.price.options.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>

            <select
                name={filters.color.name}
                id={filters.color.name}
                value={colorSelector}
                onChange={({ target }) => setColorSelector(target.value)}
            >
                <option value={filters.color.name}>{filters.color.name}</option>
                {filters.color.options.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>

            <select
                name={filters.size.name}
                id={filters.size.name}
                value={sizeSelector}
                onChange={({ target }) => setSizeSelector(target.value)}
            >
                <option value={filters.size.name}>{filters.size.name}</option>
                {filters.size.options.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>

            <select
                name={filters.gender.name}
                id={filters.gender.name}
                value={genderSelector}
                onChange={({ target }) => setGenderSelector(target.value)}
            >
                <option value={filters.gender.name}>
                    {filters.gender.name}
                </option>
                {filters.gender.options.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>

            <select
                name={filters.seasons.name}
                id={filters.seasons.name}
                value={seasonsSelector}
                onChange={({ target }) => setSeasonsSelector(target.value)}
            >
                <option value={filters.seasons.name}>
                    {filters.seasons.name}
                </option>
                {filters.seasons.options.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default FiltersGroup;
