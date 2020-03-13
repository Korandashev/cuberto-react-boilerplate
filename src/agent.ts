// @ts-ignore
import * as superagentPromise from 'superagent-promise';
import * as _superagent from 'superagent';
import commonStore from './stores/CommonStore';
import authStore from './stores/AuthStore';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = process.env.API_BASE_URL;

// Encode URL params before using
// eslint-disable-next-line no-unused-vars
const encode = encodeURIComponent;

const handleErrors = (err: _superagent.ResponseError) => {
  if (err?.response?.status === 401) {
    authStore.logout();
  }
  return err;
};

const responseBody = (res: Response) => res.body;

const tokenPlugin = (req: _superagent.Request) => {
  if (commonStore.token) {
    req.set('authorization', `Token ${commonStore.token}`);
  }
};

const requests = {
  del: (url: string) =>
    superagent
      .del(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  get: (url: string) =>
    superagent
      .get(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  put: (url: string, body: any) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  post: (url: string, body: any) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
};

const Auth = {
  current: () => requests.get('/user'),
  login: (email: string, password: string) => requests.post('/users/login', { user: { email, password } }),
  register: (username: string, email: string, password: string) => requests.post('/users', { user: { username, email, password } }),
  save: (user: any) => requests.put('/user', { user }),
};

export default {
  Auth,
};
