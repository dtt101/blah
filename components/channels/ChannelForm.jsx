import React from 'react';
import ChannelList from './ChannelList.jsx';

class ChannelForm extends React.Component {

  onSubmit(e) {
    e.preventDefault();
    const node = this.refs.channel;
    const name = node.value;
    this.props.addChannel(name);
    node.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input type="text" ref="channel" />
      </form>
    )
  }

}

ChannelForm.propTypes = {
  addChannel: React.PropTypes.func.isRequired
}

export default ChannelForm;
