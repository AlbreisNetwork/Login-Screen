

export default class Auth {

  constructor() {}

  public attempt(user: string, pass: string) {
    return (user == 'admin' && pass == 'admin')
  }

}