import * as React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

import Login from './Login';
import Registration from './Registration';

const Auth = (): React.ReactElement => {
  const { path } = useRouteMatch();

  return (
    <div className="container -full-screen -center -bg-primary">
      <Switch>
        <Route exact path={path} render={() => <Redirect to={`${path}/login`} />} />
        <Route path={`${path}/login`}>
          <Login />
        </Route>
        <Route path={`${path}/registration`}>
          <Registration />
        </Route>
      </Switch>
    </div>
  );
};

export default Auth;
