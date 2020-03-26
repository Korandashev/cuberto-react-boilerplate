import * as React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { AuthStore } from '../../stores/AuthStore';

export interface TProps {
  authStore?: AuthStore;
}

const Login = ({ authStore }: TProps): React.ReactElement => {
  const onChangeEmail = (evt: React.FormEvent<HTMLInputElement>): void => {
    const { value } = evt.currentTarget;
    authStore.setEmail(value);
  };

  const onChangePassword = (evt: React.FormEvent<HTMLInputElement>): void => {
    const { value } = evt.currentTarget;
    authStore.setPassword(value);
  };

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    authStore.register();
  };

  return (
    <form className="form -sm" onSubmit={onSubmit}>
      <div className="form-body">
        <div className="form-group">
          <input type="text" placeholder="Email" onChange={onChangeEmail} />
        </div>

        <div className="form-group">
          <input type="password" placeholder="Password" onChange={onChangePassword} />
        </div>
      </div>

      <div className="form-footer">
        <div className="form-footer__actions">
          <button type="submit">Sign Up</button>
          <Link to="/auth/login">Login</Link>
        </div>
      </div>
    </form>
  );
};

export default inject('authStore')(observer(Login));
