import React, {Component} from 'react';

class Message extends Component {

  render() {
    const {message} = this.props;
    return (
      <li>{message.body}</li>
    );
  }
}

Message.propTypes = {
  message: React.PropTypes.object.isRequired,
};

export default Message;
