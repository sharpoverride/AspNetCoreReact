import * as React from "react";
import { Route } from "react-router-dom";
import { PersistentDrawerLayout } from "./components/layout";
import { Home } from "./components/home";
import { FetchData } from "./components/fetch-data";
import { Counter } from "./components/counter";

export const routes = <PersistentDrawerLayout>
    <Route exact path="/" component={ Home } />
    <Route path="/counter" component={ Counter } />
    <Route path="/fetchdata" component={ FetchData } />
</PersistentDrawerLayout>;
