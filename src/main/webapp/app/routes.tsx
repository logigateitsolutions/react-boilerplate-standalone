import React from 'react';
import { Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Home from 'app/modules/home/home';
import Entities from 'app/entities';
import PrivateRoute from 'app/shared/auth/private-route';
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import PageNotFound from 'app/shared/error/page-not-found';
import { AUTHORITIES } from 'app/config/constants';

// const Account = Loadable({
//   loader: () => import(/* webpackChunkName: "account" */ 'app/modules/account'),
//   loading: () => <div>loading ...</div>,
// });


const Routes = () => {
  return (
    <div className="view-routes">
      <Switch>
        <ErrorBoundaryRoute path="/" exact component={Home} />
        <PrivateRoute path="/" component={Entities} hasAnyAuthorities={[AUTHORITIES.USER]} />
        <ErrorBoundaryRoute component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
