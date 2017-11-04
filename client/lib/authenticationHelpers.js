export default class AuthHelpers {

  static createRegistrationErrorMessage(fields) {
    if(fields.username && fields.email) {
      return 'The username and email is already using.'
    }
    return (fields.username ? 'UserName already in use.' : 'Email already in use.');
  }

  static createLogInErrorMessage(fields) {
    if(fields.email && fields.password) {
      return 'User not found.';
    }
    return 'Invalid password.';
  }
}