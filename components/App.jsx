import React from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';
import MessageSection from './messages/MessageSection.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      channels: [],
      activeChannel: {},
      users: [],
      activeUser: {},
      messages: []
    }
  }

  addChannel(name) {
    let {channels} = this.state;
    channels.push({
      id: channels.length,
      name
    });
    this.setState(channels);
    // TODO: make API call to server
  }

  setChannel(activeChannel) {
    this.setState({activeChannel});
    // TODO: get channels messages from server
  }

  addUser(name) {
    let {users} = this.state;
    users.push({
      id: users.length,
      name
    });
    this.setState(users);
    // TODO: make API call to server
  }

  setUserName(name) {
    let {users} = this.state;
    users.push({id: users.length, name})
    this.setState({users});
    // TODO: send to server
  }

  addMessage(body) {
    let {messages, users} = this.state;
    let createdAt = new Date();
    let author = users.length > 0 ? users[0].name : 'anonymous';
    messages.push({
      id: messages.length,
      body,
      createdAt,
      author
    });
    this.setState(messages);
    // TODO: make API call to server
  }

  render() {
    return (
      <div className="app">
        <div className="nav">
          <ChannelSection
            {...this.state}
            setChannel={this.setChannel.bind(this)}
            addChannel={this.addChannel.bind(this)}
            />
          <UserSection {...this.state}
            setUserName={this.setUserName.bind(this)}
          />
        </div>
        <MessageSection
          {...this.state}
          addMessage={this.addMessage.bind(this)}
        />
      </div>
    )
  }
}

export default App;
