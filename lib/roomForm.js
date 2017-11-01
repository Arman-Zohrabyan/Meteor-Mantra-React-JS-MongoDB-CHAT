import t from 'tcomb-form';

export default class LogInForm {
  static getFieldsRenderOption() {
    return {
      roomName: {
        legend: 'Room Name'
      }
    };
  }

  static getType() {
    const option = LogInForm.getFieldsRenderOption();

    const emailValidationMessage = function (value, path, context) {
      const errorType = (value === null || value === undefined) ? 'required.' : 'not valid.';
      return `${option[path[0]].legend} is ${errorType}`;
    };

    t.String.getValidationErrorMessage = passwordValidationMessage;

    return t.struct({
      roomName: t.String
    });
  }

  static getForm() {
    return {
      service: {
        fields: [
          'roomName'
        ]
      }
    };
  }

  static getDefaultValues() {
    return null;
  }
}
