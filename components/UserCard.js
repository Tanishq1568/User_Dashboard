import { FaTrash } from "react-icons/fa";

const UserCard = ({
  user,
  deleteUser,
}) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>

      <p>
        <strong>Username:</strong> {user.username}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Phone:</strong> {user.phone}
      </p>

      <p>
        <strong>City:</strong> {user.city}
      </p>

      <p>
        <strong>Company:</strong> {user.company}
      </p>

      <p>
        <strong>Website:</strong> {user.website}
      </p>

      <button
        className="delete-btn"
        onClick={() => deleteUser(user.id)}
      >
        <FaTrash />
        Delete
      </button>
    </div>
  );
};

export default UserCard;