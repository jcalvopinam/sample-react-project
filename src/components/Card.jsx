import PropTypes from "prop-types";
import "../App.css";

function Card({ user, defaultName, fetchUsers }) {
  const { avatar_url, login } = user;
  return (
    <div className="user-card">
      <div className="avatar-container">
        <img className="avatar" src={avatar_url} alt={login} />
        <img
          className="user-swap"
          src="https://cdn-icons-png.flaticon.com/512/13937/13937596.png"
          alt="switch delivery man"
          onClick={fetchUsers}
        />
      </div>
      <h3> hi, {user ? login : defaultName}!</h3>
    </div>
  );
}

Card.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
  }),
  defaultName: PropTypes.string,
  fetchUsers: PropTypes.func.isRequired,
};

export default Card;
