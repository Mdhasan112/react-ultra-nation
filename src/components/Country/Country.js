import React from 'react';

const Country = (props) => {
    const{name, population, flags} = props.country;
    const flagStyle = {
        height: "50px"
    }
    const countryStyle = { 
    border: "1px solid blue", 
    margin: "10px", 
    padding: "10px"};
    const handleAddedCountry = props.handleAddedCountry

    return (
        <div style={countryStyle}>
            <h4>{name.common}</h4>
            <img style={flagStyle} src={flags.png} alt="" />
            <p>Population: {population}</p>
            <button onClick = {() => handleAddedCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;