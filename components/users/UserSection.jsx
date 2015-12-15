import React from 'react';
import UserList from './UserList.jsx';
import UserForm from './UserForm.jsx';

class UserSection extends React.Component {
  render() {
    return (
      <div className="support panel panel-primary">
        <div className="panel-heading">
          <strong>Users</strong>
        </div>
        <div className="panel-body">
          <UserList {...this.props} />
          <UserForm {...this.props} />
        </div>
      </div>
    )
  }
}

UserSection.propTypes = {
  users: React.PropTypes.array.isRequired,
  setUser: React.PropTypes.func.isRequired,
  addUser: React.PropTypes.func.isRequired,
  activeUser: React.PropTypes.object.isRequired
}

export default UserSection;
