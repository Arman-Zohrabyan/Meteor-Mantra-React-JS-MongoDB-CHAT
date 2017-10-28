import React from 'react';

import t from 'tcomb-form';
const Form = t.form.Form;

import LogInForm from '/lib/logInForm';

const generateRenderOption = ( FormHelper ) => {
  const formLayout = (locals) => {
    const currentForm = FormHelper.getForm();
    return (
      <div>
        {_.map(_.keys(currentForm), (sectionKey) => {
          return (
            <div key={sectionKey}>
              <h4 className="flex-center">{currentForm[sectionKey].greeting}</h4>
              <h4 className="flex-center">{currentForm[sectionKey].loginMsg}</h4>
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
      formValue: FormHelper.getDefaultValues()
    }
  }

  componentWillReceiveProps(nextProps) {
    const { FormHelper } = nextProps;

    this.refs.joinForm.refs.input.removeErrors();
    
    this.setState({
      formRenderOptions: generateRenderOption(FormHelper),
      formValue: FormHelper.getDefaultValues()
    });
  }

  onChange(formValue, path) {
    const formComponent = this.refs.joinForm.getComponent(path);
    if (formComponent) {
      formComponent.validate();
    }
    this.setState({formValue});
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
                ref="joinForm"
                type={FormHelper.getType()}
                options={this.state.formRenderOptions}
                value={this.state.formValue}
                onChange={this.onChange.bind(this)}
              />
              <div className="row padding-vertical-md">
                <div className="col-xs-4 col-xs-offset-4">
                  <button className="btn-c">{btnContent}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
