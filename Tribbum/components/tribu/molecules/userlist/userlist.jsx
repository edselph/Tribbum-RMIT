import React from 'react';

const UserList = ({ users, onSelectUser, onClose }) => {
  return (
    <div className="user-list">
      <div classname = "user-list-header">
      <h2>Select Users:</h2>
      <button onClick={onClose} Close />
      </div>
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

export default UserList;