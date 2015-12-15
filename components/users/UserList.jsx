import React from 'react';
import User from './User.jsx';

class UserList extends React.Component {
  render() {
    let userNodes = this.props.users.map(user => {
      return <User
        key={user.id}
        user={user}
        {...this.props} />
    });
    return (
      <ul className="list-unstyled">
        {userNodes}
      </ul>
    )
  }
}

UserList.propTypes = {
  users: React.PropTypes.array.isRequired,
  setUser: React.PropTypes.func.isRequired,
  activeUser: React.PropTypes.object.isRequired,
};

export default UserList;
