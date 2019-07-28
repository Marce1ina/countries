import React from "react";
import { Route, IndexRoute } from "react-router";
import Navigation from "./presentational/Navigation.component";
import Home from "./presentational/Home.component";
import Contact from "./presentational/Contact.component";
import NotFound from "./presentational/NotFound.component";

export default (
    <Route path="/" component={Navigation}>
        <IndexRoute component={Home} />
        <Route path="contact" component={Contact} />
        <Route path="*" component={NotFound} />
    </Route>
);
