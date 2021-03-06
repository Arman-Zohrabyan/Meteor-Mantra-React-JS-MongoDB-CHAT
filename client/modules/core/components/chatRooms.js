import React from 'react';

export default class ChatRooms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: this.props.rooms
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({rooms: nextProps.rooms});
  }

  render() {
    return (
      <div id="rooms">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 window">
              <h4 className="flex-center">Rooms</h4>
              <div className="row">
                {
                  (this.state.rooms.length === 0) ?
                    <div className="has-error flex-center"><span className="help-block">No open rooms.</span></div> :
                    <div className="col-xs-12 join-btns">
                      {
                        this.state.rooms.map((val, key) => {{/*`  Online: 0`;*/}
                          return <div key={key} className="flex-center join-btn"  onClick={() => FlowRouter.go(`/room/${val._id}`)}>
                            <div className="room-name"><span className="room-content-header paddingL20R5">Room:</span>{val.room}</div>
                            <div className="room-created"><span className="room-content-header paddingL20R5">CreatedBy:</span>{val.createdBy}</div>
                            <div className="room-online"><span className="room-content-header paddingL20R5">Online:</span>0</div>
                          </div>;
                        })
                      }
                    </div>
                }
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
