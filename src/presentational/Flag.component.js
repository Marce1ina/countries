import React from "react";

const Flag = ({ country }) => (
    <div className="country-logo-wrapper">
        <img className="country-logo" src={country.imageUrl} alt="country" />
    </div>
);

export default Flag;
