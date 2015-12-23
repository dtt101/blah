import React from 'react';
import MessageList from './MessageList.jsx';

class MessageForm extends React.Component {

  onSubmit(e) {
    e.preventDefault();
    const node = this.refs.message;
    const message = node.value;
    this.props.addMessage(message);
    node.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Send" ref="message" />
        </div>
      </form>
    )
  }

}

MessageForm.propTypes = {
  addMessage: React.PropTypes.func.isRequired
}

export default MessageForm;
