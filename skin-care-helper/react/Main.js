import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';

export default function Main() {

    return (
        <HashRouter>
            <div>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </HashRouter>
    );
}
