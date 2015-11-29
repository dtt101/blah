import React from 'react';
import ChannelSection from './channels/ChannelSection.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      channels: []
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

  render() {
    return (
      <div>
        <ChannelSection
          channels={this.state.channels}
          setChannel={this.setChannel.bind(this)}
          addChannel={this.addChannel.bind(this)}
          />
      </div>
    )
  }
}

export default App;
