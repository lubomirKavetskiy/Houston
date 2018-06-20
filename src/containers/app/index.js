import React, { Fragment } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';

import './index.css';
import Training from '../../components/Training';
import Testing from '../../components/Testing';
import MyVocabulary from '../../components/MyVocabulary';
import Autorisation from '../../components/Autorisation';

const App = () => (
  <Fragment>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Training</Link>
          </li>
          <li>
            <Link to="/autorisation">Autorisation</Link>
          </li>
          <li>
            <Link to="/testing">Testing</Link>
          </li>
          <li>
            <Link to="/my-vocabulary">My vocabulary</Link>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <Switch>
        <Route exact path="/" component={Training} />
        <Route exact path="/autorisation" component={Autorisation} />
        <Route exact path="/testing" component={Testing} />
        <Route exact path="/my-vocabulary" component={MyVocabulary} />
        <Redirect to="/" />
      </Switch>
    </main>
  </Fragment>
);

export default App;
