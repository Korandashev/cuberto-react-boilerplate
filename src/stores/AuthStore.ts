import { observable, action } from 'mobx';
import * as _superagent from 'superagent';
import agent from '../agent';
import userStore from './UserStore';
import commonStore from './CommonStore';

export class AuthStore {
  @observable inProgress = false;
  @observable errors: _superagent.ResponseError = undefined;

  @observable values = {
    email: '',
    password: '',
  };

  @action setEmail(email: string): void {
    this.values.email = email;
  }

  @action setPassword(password: string): void {
    this.values.password = password;
  }

  @action reset(): void {
    this.values.email = '';
    this.values.password = '';
  }

  @action login(): Promise<any> {
    this.inProgress = true;
    this.errors = undefined;

    const { email, password } = this.values;

    return agent.Auth.login({ email, password })
      .then(({ user }: any) => commonStore.setToken(user.token))
      .then(() => userStore.pullUser())
      .catch(
        action((err: _superagent.ResponseError) => {
          this.errors = err?.response?.body?.errors;
          throw err;
        }),
      )
      .finally(
        action(() => {
          this.inProgress = false;
        }),
      );
  }

  @action register(): Promise<any> {
    this.inProgress = true;
    this.errors = undefined;

    const { email, password } = this.values;

    return agent.Auth.register({ email, password })
      .then(({ user }: any) => commonStore.setToken(user.token))
      .then(() => userStore.pullUser())
      .catch(
        action((err: _superagent.ResponseError) => {
          this.errors = err?.response?.body?.errors;
          throw err;
        }),
      )
      .finally(
        action(() => {
          this.inProgress = false;
        }),
      );
  }

  @action logout(): Promise<void> {
    commonStore.setToken(undefined);
    userStore.forgetUser();
    return Promise.resolve();
  }
}

export default new AuthStore();
