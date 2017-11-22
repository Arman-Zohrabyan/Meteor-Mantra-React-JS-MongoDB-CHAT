import React from 'react';

export default class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      oldMessages: this.props.room.messages,
      message: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({oldMessages: nextProps.room.messages});
    setTimeout( () => {
      const objDiv = document.getElementById("message-zone");
      objDiv.scrollTop = objDiv.scrollHeight
    },5000);
  }

  componentDidMount() {
    const objDiv = document.getElementById("message-zone");
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  sendMessage() {
    const { roomId } = this.props;
    const { message } = this.state;
    if(message.length > 0) {
      this.props.sendMessage(roomId, message);
      const messagearea = document.getElementById('messagearea');
      messagearea.value = '';
      this.setState({message: messagearea.value});
    }
  }

  pressEnterOnMessageArea(e) {
    if(e.charCode === 13) {
      this.sendMessage();
      setTimeout( () => {window.document.getElementById('messagearea').value = ""} );
    } else {
      this.setState({message: e.target.value});
    }
  }

  render() {
    const { oldMessages } = this.state;
    return (
      <div id="room">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 window">
              
              <div className="padding-vertical-md">
                {/*<div className="btn-c btn-100 pull-left btn-close" onClick={() => FlowRouter.go('chat.rooms')}>Back</div>*/}
                <h4 className="flex-center marginT5B5">Room: {this.props.room.room}</h4>
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
                    { oldMessages ?
                      oldMessages.map( (msg, number) => {
                        const currentUserMessage = (this.props.currentUserId === msg.userId);
                        return (
                          <div className={currentUserMessage ? 'currentUserMessage' : 'userMessage'} key={number}>
                            <p>{msg.message}</p>
                            <p className="message-info">data: {msg.sent.toString()}, by: {msg.by}</p>
                          </div>
                        );
                      }) : ''
                    }
                  </div>
                  <div className="input-zone">
                    <textarea id='messagearea' placeholder="Write Your Message." onKeyPress={this.pressEnterOnMessageArea.bind(this)} />
                    <div className="send-btn flex-center" onClick={this.sendMessage.bind(this)}>Send</div>
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
