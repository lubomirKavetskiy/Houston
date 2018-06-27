import React from 'react';
import { Link } from 'react-router-dom';
import { routesConfig } from './routes';

const Navigation = () => (
  <nav>
    <ul>
      {routesConfig.map(({ route, title }) => (
        <li key={route}>
          <Link to={route}>{title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
