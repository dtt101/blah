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

  setUser(activeUser) {
    this.setState({activeUser});
    // TODO: get users from server
  }

  addMessage(message) {
    let {messages} = this.state;
    messages.push({
      id: messages.length,
      body: message
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
            setUser={this.setUser.bind(this)}
            addUser={this.addUser.bind(this)}
          />
        <MessageSection
          {...this.state}
          addMessage={this.addMessage.bind(this)}
        />
        </div>
      </div>
    )
  }
}

export default App;
