import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { TRAINING_ROUTE, routesConfig } from 'components/Navigation/routes';
import Navigation from 'components/Navigation';
import Layout from 'components/common/Layout';

const App = () => (
  <Layout>
    <Navigation />
    <Switch>
      {routesConfig.map(({ route, component }) => (
        <Route key={component} exact path={route} component={component} />
      ))}
      <Redirect to={TRAINING_ROUTE} />
    </Switch>
  </Layout>
);

export default App;
