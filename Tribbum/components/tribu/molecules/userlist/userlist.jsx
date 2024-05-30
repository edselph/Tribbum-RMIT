import { useState } from "react";
import UserIcon from "@/public/assets/icons/user.svg";
import CloseIcon from "@/public/assets/icons/close_icon.svg";
const UserList = ({
  users,
  selectedUsers,
  onSelectUser,
  showUsers,
  handleRemoveUser,
  setShowUsers,
}) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  return (
    <div className="space-y-3 my-6">
      {selectedUsers.length > 0 && <h2>Selected Users</h2>}
      <ul className="flex items-center justify-start gap-3 flex-wrap">
        {selectedUsers.map((user) => (
          <li
            key={user.id}
            className="flex items-center bg-gray-800 border text-white border-white drop-shadow-md pr-3 pl-1 rounded-full justify-start gap-3"
          >
            {imageError ? (
              <UserIcon className="w-10 h-10 text-white cursor-pointer" />
            ) : (
              <img
                src={user.photoUrl}
                className="rounded-full border"
                onError={handleImageError}
              />
            )}
            {user.name}
            <button
              className="ml-2 group text-lg text-primary-500 font-medium"
              onClick={() => handleRemoveUser(user.id)}
            >
              <div className="flex w-6 h-6 mr-1 justify-center items-center">
                <CloseIcon className="flex w-full h-full text-white group-hover:text-[red] fill-current" />
              </div>
            </button>
          </li>
        ))}
      </ul>
      {showUsers && (
        <div className="user-list-popup">
          <div className="user-list">
            <div className="user-list-header">
              <h2>Select Users:</h2>
              {/* <button onClick={onClose} /> */}
            </div>
            <ul>
              {users
                .filter(
                  (user) =>
                    !selectedUsers.some(
                      (selectedUser) => selectedUser.id === user.id
                    )
                )
                .map((user) => (
                  <button
                    key={user.id}
                    className="flex items-center justify-start gap-3"
                    type="button"
                    onClick={() => onSelectUser(user)}
                  >
                    {imageError ? (
                      <UserIcon className="w-10 h-10 cursor-pointer" />
                    ) : (
                      <img
                        src={user.photoUrl}
                        className="rounded-full border"
                        onError={handleImageError}
                      />
                    )}
                    <li>{user.name}</li>
                  </button>
                ))}
            </ul>
          </div>
          <button className="close-btn" onClick={() => setShowUsers(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default UserList;
