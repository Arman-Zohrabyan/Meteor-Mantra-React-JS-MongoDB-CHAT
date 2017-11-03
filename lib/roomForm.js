import t from 'tcomb-form';

export default class RoomForm {
  static getFieldsRenderOption() {
    return {
      roomName: {
        legend: 'Room Name'
      }
    };
  }

  static getType() {
    const option = RoomForm.getFieldsRenderOption();

    const validationMessage = function (value, path, context) {
      const errorType = (value === null || value === undefined) ? 'required.' : 'not valid.';
      return `${option[path[0]].legend} is ${errorType}`;
    };

    t.String.getValidationErrorMessage = validationMessage;

    return t.struct({
      roomName: t.String
    });
  }

  static getDefaultValues() {
    return null;
  }
}
