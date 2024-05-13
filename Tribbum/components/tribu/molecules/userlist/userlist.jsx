import React from 'react';

const userlist = ({ users, onSelectUser }) => {
  return (
    <div className="user-list">
      <h2>Select Users:</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => onSelectUser(user)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default userlist;