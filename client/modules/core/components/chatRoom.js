import React from 'react';

export default class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }

  componentDidMount() {
    const objDiv = document.getElementById("message-zone");
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {
    return (
      <div id="room">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 window">
              
              <div className="padding-vertical-md">
                <div className="btn-c btn-100 pull-left btn-close" onClick={() => FlowRouter.go('chat.rooms')}>Back</div>
                <h4 className="flex-center marginT5B5">Room</h4>
              </div>

              <div className="row chat-content">
                <div className="col-sm-2 col-xs-3 chat-online-users-section">
                  <p className="room-content-header flex-center">Online users</p>
                  {/*<p className="flex-center">sadads</p>
                  <p className="flex-center">sdads</p>
                  <p className="flex-center">sdsdaads</p>
                  <p className="flex-center">sdadsq</p>
                  <p className="flex-center">sdadsaaaas</p>
                  <p className="flex-center">sdadfass</p>
                  <p className="flex-center">sdadddds</p>*/}
                </div>
                <div className="col-sm-10 col-xs-9 chat-messages-section">
                  <p className="room-content-header flex-center">Messages</p>
                  <div id="message-zone" className="chat-message-zone">
                    {/*<div className="currentUserMessage">
                      <p>sdads</p>
                      <p className="message-info">data: 12.02.2007, by: asdasd</p>
                    </div>
                    <div className="userMessage">
                      <p>sdads</p>
                      <p className="message-info">data: 12.02.2007, by: asdasd</p>
                    </div>
                    <div className="userMessage">
                      <p>sdads</p>
                      <p className="message-info">data: 12.02.2007, by: asdasd</p>
                    </div>
                    <div className="userMessage">
                      <p>sdads</p>
                      <p className="message-info">data: 12.02.2007, by: asdasd</p>
                    </div>
                    <div className="currentUserMessage">
                      <p>sdads</p>
                      <p className="message-info">data: 12.02.2007, by: asdasd</p>
                    </div>
                    <div className="userMessage">
                      <p>sdads</p>
                      <p className="message-info">data: 12.02.2007, by: asdasd</p>
                    </div>
                    <div className="userMessage">
                      <p>sdads</p>
                      <p className="message-info">data: 12.02.2007, by: asdasd</p>
                    </div>
                    <div className="userMessage">
                      <p>sdads</p>
                      <p className="message-info">data: 12.02.2007, by: asdasd</p>
                    </div>
                    <div className="userMessage">
                      <p>sdads</p>
                      <p className="message-info">data: 12.02.2007, by: asdasd</p>
                    </div>
                    <div className="userMessage">
                      <p>sdads</p>
                      <p className="message-info">data: 12.02.2007, by: asdasd</p>
                    </div>
                    <div className="userMessage">
                      <p>sdads</p>
                      <p className="message-info">data: 12.02.2007, by: asdasd</p>
                    </div>
                    <div className="userMessage">
                      <p>sdads</p>
                      <p className="message-info">data: 12.02.2007, by: asdasd</p>
                    </div>*/}
                  </div>
                  <div className="input-zone">
                    <textarea placeholder="Write Your Message."></textarea>
                    <div className="send-btn flex-center">Send</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
