import React from 'react';

export default class OpenRoom extends React.Component {
  render() {
    return (
      <div id="rooms">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 window">
              <h4 className="flex-center">Open New Room</h4>
              <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                </div>
              </div>
              <div className="flex-center padding-vertical-md">
                <div className="btn-c btn-20 margin-horizontal-md">Open</div>
                <div className="btn-c btn-20 margin-horizontal-md" onClick={() => FlowRouter.go('chat.rooms')}>Back</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
