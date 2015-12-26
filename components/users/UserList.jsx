import React from 'react';
import User from './User.jsx';

class UserList extends React.Component {
  render() {
    let userNodes = this.props.users.map(user => {
      return <User
        key={user.id}
        user={user}
      />
    });
    return (
      <ul className="list-unstyled">
        {userNodes}
      </ul>
    )
  }
}

UserList.propTypes = {
  users: React.PropTypes.array.isRequired
};

export default UserList;
