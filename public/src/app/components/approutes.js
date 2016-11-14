import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import ParserContainer from './parser/ParserContainer.react';
import AboutContainer from './about/AboutContainer.react';
import NavigationBar from './navigation/NavigationBar.react';
import ContributeContainer from './contribute/ContributeContainer.react';

export class AppRoutes extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={"/"} component={NavigationBar} >
                <Route path={"/parser"} component={ParserContainer} />
                <Route path={"/about"} component={AboutContainer} />
                <Route path={"/contribute"} component={ContributeContainer} />
                    <IndexRoute component={ParserContainer} />
                </Route>
            </Router>
        );
    }
}
