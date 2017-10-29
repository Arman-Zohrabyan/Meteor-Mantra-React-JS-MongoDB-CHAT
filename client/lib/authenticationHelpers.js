export default class AuthHelpers {
	static createRegistrationErrorMessage(fields) {
		if(fields.name && fields.email) {
			return 'The name and email is already using.'
		}
		return (fields.name ? 'Name already in use.' : 'Name already in use.');
	}
}