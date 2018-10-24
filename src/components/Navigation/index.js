import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';

import { routesConfig } from './routes';

const Navigation = ({ location: { pathname } }) => (
  <MenuList>
    {routesConfig.map(({ route, title }) => (
      <MenuItem
        key={route}
        component={Link}
        to={route}
        selected={route === pathname}
      >
        {/* <Link to={route}>{title}</Link> */}
        {title}
      </MenuItem>
    ))}
  </MenuList>
);

export default withRouter(Navigation);
