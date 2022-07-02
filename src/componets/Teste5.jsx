import React from "react";

function Teste5() {
    const cars = ["camaro", "fiat", "ferrari"];
    const colors = ["blue", "orange", "gray"];

    const [section, setSection] = React.useState();

    function handleClickSection(event) {
        setSection(event.target.innerHTML);
    }

    return (
        <div>
            <li onClick={handleClickSection}>cars</li>
            <li onClick={handleClickSection}>colors</li>
            {section == "cars" && cars.map((car) => <li key={car}>{car}</li>)}
            {section == "colors" &&
                colors.map((color) => <li key={color}>{color}</li>)}
        </div>
    );
}

export default Teste5;
