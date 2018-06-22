import Auth from './Auth';

class Login {
  username: string;
  password: string;

  auth: Auth;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
    this.auth = new Auth;
  }

  public check() {
    return this.auth.attempt(this.username, this.password);
  }

}

export = Login;