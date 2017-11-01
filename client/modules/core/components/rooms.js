import React from 'react';

export default class Rooms extends React.Component {
  render() {
    return (
      <div id="rooms">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 window">
              <h4 className="flex-center">Rooms</h4>
              <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                  <div className="has-error flex-center"><span className="help-block">No open rooms.</span></div>
                </div>
              </div>
              <hr />
              <div className="flex-center padding-vertical-md">
                <div className="btn-c btn-50" onClick={() => FlowRouter.go('chat.openNewRoom')}>Create new room</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
