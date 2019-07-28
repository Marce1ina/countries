import React from "react";
import { Link } from "react-router";
import Flag from "./Flag.component";

const FlagList = props => (
    <div className="countries-list">
        {props.countries.map(country => {
            return (
                <div className="single-country" key={country.id}>
                    <Link className="logo" to={"countries/country/" + country.id}>
                        <Flag country={country} />
                    </Link>
                    <button onClick={() => props.deleteCountry(country.id)}>DELETE</button>
                </div>
            );
        })}
    </div>
);

export default FlagList;
