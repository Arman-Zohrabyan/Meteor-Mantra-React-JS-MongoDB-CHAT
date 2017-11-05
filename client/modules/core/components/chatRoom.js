import React from 'react';

export default class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }

  render() {
    return (
      <div id="room">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 window">
              <h4 className="flex-center">Room</h4>
              <div className="row chat-content">
                <div className="col-sm-2 col-xs-3 chat-online-users-section">
                  <p className="room-content-header flex-center">Online users</p>
                  <p className="flex-center">sadads</p>
                  <p className="flex-center">sdads</p>
                  <p className="flex-center">sdsdaads</p>
                  <p className="flex-center">sdadsq</p>
                  <p className="flex-center">sdadsaaaas</p>
                  <p className="flex-center">sdadfass</p>
                  <p className="flex-center">sdadddds</p>
                </div>
                <div className="col-sm-10 col-xs-9 chat-messages-section">
                  <p className="room-content-header flex-center">Messages</p>
                  <p>sdads</p>
                  <p>sdads</p>
                  <p>sdads</p>
                  <p>sdads</p>
                  <p>sdads</p>
                  <p>sdads</p>
                  <p>sdads</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
