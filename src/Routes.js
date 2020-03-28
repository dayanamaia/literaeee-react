import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('.pages/Home'));
const AboutWord = React.lazy(() => import('.pages/AboutWord'));
const NotFound = React.lazy(() => import('.pages/NotFound'));

const Routes = () => {
    <Suspense fallback="Loading...">
        <Switch>
            <Route exact path='/' component={routerProps => <Home {...routerProps} />} />
            <Route exact path='/:word' component={routerProps => <AboutWord {...routerProps} />} />
            <Route exact path='*' component={routerProps => <NotFound {...routerProps} />} />
        </Switch>
    </Suspense>
}

export default Routes;