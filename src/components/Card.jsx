import PropTypes from "prop-types";
import "../App.css";

function Card({ user, defaultName }) {
  const { avatar_url, login } = user;
  return (
    <div className="user-card">
      <img src={avatar_url} alt={login} className="avatar" />
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
};

export default Card;
