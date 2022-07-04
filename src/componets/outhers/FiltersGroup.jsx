import React from "react";
import { GlobalContext } from "../../GlobalContext";
import dataFilters from "../../data/dataFilters";

function FiltersGroup() {
    const {
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
    } = React.useContext(GlobalContext);

    return (
        <div className="filters-group">
            <h3>Filters:</h3>
            <select
                name={dataFilters.price.name}
                id={dataFilters.price.name}
                value={priceSelector}
                onChange={({ target }) => setPriceSelector(target.value)}
            >
                <option value={dataFilters.price.name}>
                    {dataFilters.price.name}
                </option>
                {dataFilters.price.options.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>

            <select
                name={dataFilters.color.name}
                id={dataFilters.color.name}
                value={colorSelector}
                onChange={({ target }) => setColorSelector(target.value)}
            >
                <option value={dataFilters.color.name}>
                    {dataFilters.color.name}
                </option>
                {dataFilters.color.options.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>

            <select
                name={dataFilters.size.name}
                id={dataFilters.size.name}
                value={sizeSelector}
                onChange={({ target }) => setSizeSelector(target.value)}
            >
                <option value={dataFilters.size.name}>
                    {dataFilters.size.name}
                </option>
                {dataFilters.size.options.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>

            <select
                name={dataFilters.gender.name}
                id={dataFilters.gender.name}
                value={genderSelector}
                onChange={({ target }) => setGenderSelector(target.value)}
            >
                <option value={dataFilters.gender.name}>
                    {dataFilters.gender.name}
                </option>
                {dataFilters.gender.options.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>

            <select
                name={dataFilters.seasons.name}
                id={dataFilters.seasons.name}
                value={seasonsSelector}
                onChange={({ target }) => setSeasonsSelector(target.value)}
            >
                <option value={dataFilters.seasons.name}>
                    {dataFilters.seasons.name}
                </option>
                {dataFilters.seasons.options.map((option) => (
                    <option value={option} key={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default FiltersGroup;
