import React from 'react';

export default class RadioButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="jRadioButton">
        <input type="radio" name="1" />
        <label className="jrb-label">{this.props.content}</label>
        <div className="jrb-bullet">
          <div className="jrb-line zero"></div>
          <div className="jrb-line one"></div>
          <div className="jrb-line two"></div>
          <div className="jrb-line three"></div>
          <div className="jrb-line four"></div>
          <div className="jrb-line five"></div>
          <div className="jrb-line six"></div>
          <div className="jrb-line seven"></div>
        </div>
      </div>
    );
  }
}
