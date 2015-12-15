import React from 'react';
import UserList from './UserList.jsx';

class UserForm extends React.Component {

  onSubmit(e) {
    e.preventDefault();
    const node = this.refs.user;
    const name = node.value;
    this.props.addUser(name);
    node.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Add user" ref="user" />
        </div>
      </form>
    )
  }

}

UserForm.propTypes = {
  addUser: React.PropTypes.func.isRequired
}

export default UserForm;
