import React from "react";
import { Route, IndexRoute } from "react-router";
import Navigation from "./presentational/Navigation.component";
import Home from "./presentational/Home.component";
import Contact from "./presentational/Contact.component";
import NotFound from "./presentational/NotFound.component";
import FlagListContainer from "./containers/FlagListContainer.component";
import CountryDetailsContainer from "./containers/CountryDetailsContainer.component";
import ContinentsContainer from "./containers/ContinentsContainer.component";

export default (
    <Route path="/" component={Navigation}>
        <IndexRoute component={Home} />

        <Route path="countries">
            <IndexRoute component={FlagListContainer} />
            <Route path="country/:id" component={CountryDetailsContainer} />
        </Route>
        <Route path="continents" component={ContinentsContainer} />
        <Route path="contact" component={Contact} />
        <Route path="*" component={NotFound} />
    </Route>
);
