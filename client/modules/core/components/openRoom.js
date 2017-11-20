import React from 'react';

import t from 'tcomb-form';
const Form = t.form.Form;

import RoomForm from '/lib/roomForm';


export default class OpenRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: RoomForm.getDefaultValues(),
      formType: RoomForm.getType()
    }
  }

  createNewRoom() {
    const value = this.refs.roomForm.getValue();
    if(!value) {
      console.warn('Validation Error.');
    } else {
      this.props.createRoom(value);
      FlowRouter.go('chat.rooms');
    }
  }

  render() {
    return (
      <div id="rooms">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 window">
              <h4 className="flex-center">Open New Room</h4>
              <div className="row form-layout">
                <div className="col-xs-12">
                  <Form
                    ref="roomForm"
                    type={this.state.formType}
                    value={this.state.formValue}
                  />
                </div>
              </div>
              <div className="flex-center padding-bottom-md">
                <div className="btn-c btn-20 margin-horizontal-md" onClick={this.createNewRoom.bind(this)}>Open</div>
                <div className="btn-c btn-20 margin-horizontal-md" onClick={() => FlowRouter.go('chat.rooms')}>Back</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
