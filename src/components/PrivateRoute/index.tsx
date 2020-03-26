import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { UserStore } from '../../stores/UserStore';

export interface TProps {
  userStore?: UserStore;
  children: React.ReactNode;
  [key: string]: any;
}

const PrivateRoute = ({ userStore, children, ...rest }: TProps): React.ReactElement => (
  <Route
    {...rest}
    render={({ location }) =>
      userStore.currentUser ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/auth/login',
            state: { from: location },
          }}
        />
      )
    }
  />
);

export default inject('userStore')(observer(PrivateRoute));
