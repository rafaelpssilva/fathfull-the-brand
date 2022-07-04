import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
    const [priceSelector, setPriceSelector] = React.useState("price");
    const [colorSelector, setColorSelector] = React.useState("color");
    const [sizeSelector, setSizeSelector] = React.useState("size");
    const [genderSelector, setGenderSelector] = React.useState("gender");
    const [seasonsSelector, setSeasonsSelector] = React.useState("seasons");

    const [navFillter, setNavFillter] = React.useState("");

    return (
        <GlobalContext.Provider
            value={{
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

                navFillter,
                setNavFillter,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
