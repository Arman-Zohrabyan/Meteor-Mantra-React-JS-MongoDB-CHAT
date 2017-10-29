export default class AuthHelpers {

	static createRegistrationErrorMessage(fields) {
		if(fields.name && fields.email) {
			return 'The name and email is already using.'
		}
		return (fields.name ? 'Name already in use.' : 'Email already in use.');
	}

	static createLogInErrorMessage(fields) {
		if(fields.email && fields.password) {
			return 'User not found.';
		} else {
			return 'Invalid password.';
		}
	}
}