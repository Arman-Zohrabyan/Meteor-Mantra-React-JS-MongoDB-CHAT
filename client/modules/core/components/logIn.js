import React from 'react';

import t from 'tcomb-form';
const Form = t.form.Form;

import LogInForm from '/lib/logInForm';

const generateRenderOption = ( FormHelper, infoAboutRegistration ) => {
  const formLayout = (locals) => {
    const currentForm = FormHelper.getForm();
    return (
      <div>
        {_.map(_.keys(currentForm), (sectionKey) => {
          return (
            <div key={sectionKey}>
              <h4 className="flex-center">{currentForm[sectionKey].greeting}</h4>
              <h4 className="flex-center">{infoAboutRegistration ? infoAboutRegistration.replace(/"/g,'') : currentForm[sectionKey].info}</h4>
              <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                  {currentForm[sectionKey].fields.map((field) => {
                    return locals.inputs[field];
                  })}
                </div>
              </div>
            </div>);
        })}
      </div>
    );
  };

  return {
    template: formLayout,
    auto: 'placeholders',
    fields: FormHelper.getFieldsRenderOption()
  };
}

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);

    const { FormHelper } = this.props;

    this.state = {
      formRenderOptions: generateRenderOption(FormHelper),
      formValue: FormHelper.getDefaultValues(),
      errorMsg: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    const { FormHelper } = nextProps;

    this.refs.authenticationForm.refs.input.removeErrors();
    
    this.setState({
      formRenderOptions: generateRenderOption(FormHelper, nextProps.infoAboutRegistration),
      formValue: FormHelper.getDefaultValues()
    });
    if(nextProps.infoAboutRegistration) {
      nextProps.removeInfoAboutRegistration();
    }
  }

  getError(alreadyExistingData, errorMsg) {
    Object.keys(alreadyExistingData).forEach((inputName) => {
      if(alreadyExistingData[inputName]) {
        this.refs.authenticationForm.refs.input.refs[inputName].setState({hasError: true});
      }
    });
    this.setState({errorMsg});
  }

  sendAuthenticationRequest(event) {
    const type = (this.props.form === 'LogInForm') ? 'login' : 'registration';
    const values = this.refs.authenticationForm.getValue();
    if (!values) {
      console.warn('Validation Error.');
    } else {
      this.props.authenticationRequest(type, values, this.getError.bind(this));
    }
  }

  onChange(formValue, path) {
    const formComponent = this.refs.authenticationForm.getComponent(path);
    if (formComponent) {
      formComponent.validate();
    }
    this.setState({formValue, errorMsg: ''});
  }

  render() {
    const { FormHelper } = this.props;
    const btnContent = (this.props.form === 'LogInForm') ? 'Log In' : 'Registration';
    return (
      <div id="logInPage">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 log-in-form">
              <Form
                ref="authenticationForm"
                type={FormHelper.getType()}
                options={this.state.formRenderOptions}
                value={this.state.formValue}
                onChange={this.onChange.bind(this)}
              />
              {this.state.errorMsg ? <div className="has-error flex-center"><span className="help-block">{this.state.errorMsg}</span></div> : ''}
              <div className="row padding-vertical-md">
                <div className="col-xs-4 col-xs-offset-4">
                  <button className="btn-c" onClick={this.sendAuthenticationRequest.bind(this)}>{btnContent}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
