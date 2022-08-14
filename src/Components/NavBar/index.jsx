import React from 'react';
import { withRouter } from 'react-router-dom';


// helpers
import { ROUTES } from '../../helpers/const';
import { convertRouteToUrl } from '../../helpers/utilities';

// style
import {
  Link,
  Div
} from './style';

const NavBar = ({ isHome }) => {

  return (
    <Div>
      {ROUTES.map((route, i) =>
        <Link ishome={isHome} to={`/${convertRouteToUrl(route)}`} key={i}>{route}</Link>
      )}
    </Div>
  );
};


export default withRouter(NavBar);