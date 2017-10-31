import t from 'tcomb-form';

export default class RegistrationForm {
  static getFieldsRenderOption() {
    return {
      username: {
        legend: 'User Name'
      },
      phone: {
        legend: 'Phone Number'
      },
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
    const option = RegistrationForm.getFieldsRenderOption();

    let EmailType = t.refinement(t.String, (s) => 
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(s)
    );

    let OtherTypes = t.refinement(t.String, (s) => 
      /^[A-Za-z\d]{4,}$/.test(s)
    );

    let PhoneType = t.refinement(t.String, (s) => 
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,8}$/.test(s)
    );

    const emailValidationMessage = function (value, path, context) {
      const errorType = (value === null || value === undefined) ? 'required.' : 'not valid.';
      return `${option[path[0]].legend} is ${errorType}`;
    };

    const otherTypesValidationMessage = function (value, path, context) {
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

    OtherTypes.getValidationErrorMessage = otherTypesValidationMessage;
    PhoneType.getValidationErrorMessage = emailValidationMessage;
    EmailType.getValidationErrorMessage = emailValidationMessage;

    return t.struct({
      username: OtherTypes,
      phone: t.maybe(PhoneType),
      email: EmailType,
      password: OtherTypes
    });
  }

  static getForm() {
    return {
      service: {
        greeting: 'Register to have access to chats!',
        info: <p>If you already have an account, <i><a href="/log-in">log in</a></i>.</p>,
        fields: [
          'username',
          'phone',
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
