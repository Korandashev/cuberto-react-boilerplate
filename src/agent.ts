// @ts-ignore
import * as superagentPromise from 'superagent-promise';
import * as _superagent from 'superagent';
import commonStore from './stores/CommonStore';
import authStore from './stores/AuthStore';
import { Request } from './types/Request';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = process.env.API_BASE_URL;

// Encode URL params before using
// eslint-disable-next-line no-unused-vars
const encode = encodeURIComponent;

const handleErrors = <T extends _superagent.ResponseError>(err: T): void | T => {
  if (err?.response?.status === 401) {
    authStore.logout();
  }
  return err;
};

const responseBody = (res: Response): ReadableStream<Uint8Array> | null => res.body;

const tokenPlugin = (req: _superagent.Request): void => {
  if (commonStore.token) {
    req.set('authorization', `Token ${commonStore.token}`);
  }
};

const requests = {
  del: (url: string): Promise<any> =>
    superagent
      .del(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  get: (url: string): Promise<any> =>
    superagent
      .get(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  put: (url: string, body: any): Promise<any> =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  post: (url: string, body: any): Promise<any> =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
};

const Auth = {
  current: (): Promise<any> => requests.get('/user'),
  login: (credentials: Request.Login): Promise<any> => requests.post('/users/login', { user: credentials }),
  register: (credentials: Request.Registration): Promise<any> => requests.post('/users', { user: credentials }),
  save: (user: any): Promise<any> => requests.put('/user', { user }),
};

export default {
  Auth,
};
