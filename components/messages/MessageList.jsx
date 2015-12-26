import React from 'react';
import Message from './Message.jsx';

class MessageList extends React.Component {
  render() {
    let messageNodes = this.props.messages.map(message => {
      return <Message
        key={message.id}
        message={message}
        />
    });
    return (
      <ul className="list-unstyled">
        {messageNodes}
      </ul>
    )
  }
}

MessageList.propTypes = {
  messages: React.PropTypes.array.isRequired
};

export default MessageList;
