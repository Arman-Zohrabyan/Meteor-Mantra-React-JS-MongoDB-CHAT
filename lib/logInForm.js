import t from 'tcomb-form';

export default class LogInForm {
  static getFieldsRenderOption() {
    return {
      email: {
        legend: 'Email'
      },
      password: {
        legend: 'Password',
        type: 'password'
      }
    };
  }

  static getType() {
    const option = LogInForm.getFieldsRenderOption();

    let EmailType = t.refinement(t.String, (s) => 
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(s)
    );

    let PasswordType = t.refinement(t.String, (s) => 
      /^[A-Za-z\d]{4,}$/.test(s)
    );

    const emailValidationMessage = function (value, path, context) {
      const errorType = (value === null || value === undefined) ? 'required.' : 'not valid.';
      return `${option[path[0]].legend} is ${errorType}`;
    };

    const passwordValidationMessage = function (value, path, context) {
      let errorType = '';
      if (value === null || value === undefined) {
        errorType = 'is required.';
      } else if (value.length < 4) {
        errorType = 'must contain at least 4 characters.';
      } else {
        errorType = 'can consist of A-Z, a-z, 0-9.'; 
      }
      return `${option[path[0]].legend} ${errorType}`;
    };

    PasswordType.getValidationErrorMessage = passwordValidationMessage;
    EmailType.getValidationErrorMessage = emailValidationMessage;

    return t.struct({
      email: EmailType,
      password: PasswordType
    });
  }

  static getForm() {
    return {
      service: {
        greeting: 'Welcome! Log in and join the chat!',
        info: <p>If you are not registered, <i><a href="/sign-up">register now</a></i>.</p>,
        fields: [
          'email',
          'password'
        ]
      }
    };
  }

  static getDefaultValues() {
    return null;
  }
}
