import { observable, action, reaction } from 'mobx';

export class CommonStore {
  @observable appName = 'Conduit';
  @observable token = window.localStorage.getItem('jwt');
  @observable appLoaded = false;

  constructor() {
    reaction(
      () => this.token,
      (token: string) => {
        if (token) {
          window.localStorage.setItem('jwt', token);
        } else {
          window.localStorage.removeItem('jwt');
        }
      },
    );
  }

  @action setToken(token: string): void {
    this.token = token;
  }

  @action setAppLoaded(): void {
    this.appLoaded = true;
  }
}

export default new CommonStore();
