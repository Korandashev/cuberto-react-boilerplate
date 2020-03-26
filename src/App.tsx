import * as React from 'react';
import { withRouter, RouteComponentProps, Route, Switch } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { hot } from 'react-hot-loader/root';

import { CommonStore } from './stores/CommonStore';
import { UserStore } from './stores/UserStore';

import Auth from './pages/Auth';
import PrivateRoute from './components/PrivateRoute';

interface TProps extends RouteComponentProps<any> {
  commonStore: CommonStore;
  userStore: UserStore;
}

@inject('userStore', 'commonStore')
@observer
class App extends React.Component<TProps, any> {
  constructor(props: TProps) {
    super(props);

    const { commonStore } = this.props;

    if (!commonStore.token) {
      commonStore.setAppLoaded();
    }
  }

  componentDidMount() {
    const { commonStore, userStore } = this.props;

    if (commonStore.token) {
      userStore.pullUser().finally(() => commonStore.setAppLoaded());
    }
  }

  render() {
    const { commonStore } = this.props;

    if (commonStore.appLoaded) {
      return (
        <div>
          <Switch>
            <PrivateRoute exact path="/">
              Hello
            </PrivateRoute>
            <Route path="/auth">
              <Auth />
            </Route>
          </Switch>
        </div>
      );
    }

    return <div>Loading</div>;
  }
}

export default hot(withRouter(App));
