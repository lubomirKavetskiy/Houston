import React, { Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { TRAINING_ROUTE, routesConfig } from '../../components/Navigation/routes';
import Navigation from '../../components/Navigation';

const App = () => (
  <Fragment>
    <header>
      <Navigation />
    </header>

    <main>
      <Switch>
        {routesConfig.map(({ route, component }) => (
          <Route exact path={route} component={component} />
        ))}
        <Redirect to={TRAINING_ROUTE} />
      </Switch>
    </main>
  </Fragment>
);

export default App;
