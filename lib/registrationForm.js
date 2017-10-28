import t from 'tcomb-form';

export default class RegistrationForm {
  static getFieldsRenderOption() {
    return {
      firstName: { legend: 'First Name', name: 'First Name' },
      email: { legend: 'Email', name: 'Email' }
    };
  }

  static getType() {
    const option = RegistrationForm.getFieldsRenderOption();

    let EmailType = t.refinement(t.String, (s) => 
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(s)
    );

    const validationMessage = function (value, path, context) {
      const errorType = (value === null || value === undefined) ? 'required' : 'not valid';
      return `${option[path[0]].legend} value is ${errorType}`;
    };

    t.String.getValidationErrorMessage = validationMessage;
    EmailType.getValidationErrorMessage = validationMessage;

    return t.struct({
      firstName: t.String,
      email: EmailType
    });
  }

  static getForm() {
    return {
      service: {
        greeting: 'Register to have access to chats!',
        loginMsg: <p>If you already have an account, <i><a href="/log-in">log in</a></i>.</p>,
        fields: [
          'firstName',
          'email'
        ]
      }
    };
  }

  static getDefaultValues() {
    return null;
  }
}
