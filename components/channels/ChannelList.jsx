import React from 'react';
import Channel from './Channel.jsx';

class ChannelList extends React.Component {
  render() {
    let channelNodes = this.props.channels.map(channel => {
      return <Channel
        key={channel.id}
        channel={channel}
        {...this.props} />
    });
    return (
      <ul className="list-unstyled">
        {channelNodes}
      </ul>
    )
  }
}

ChannelList.propTypes = {
  channels: React.PropTypes.array.isRequired,
  setChannel: React.PropTypes.func.isRequired,
  activeChannel: React.PropTypes.object.isRequired,
};

export default ChannelList;
