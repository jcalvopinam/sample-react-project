import PropTypes from "prop-types";
import { useReducer } from "react";
import "./App.css";
import Card from "./components/Card";
import StarRating from "./components/StarRating";
import useGitHubUser from "./hooks/useGitHubUser";

function App({ name }) {
  const [checked, dispatch] = useReducer((checked) => !checked, false);
  const { user, loading, error, fetchUsers } = useGitHubUser();

  if (loading) {
    return <p>Loading user...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!user) {
    return <p>No user found</p>;
  }

  return (
    <div>
      <Card defaultName={name} user={user} fetchUsers={fetchUsers} />
      <h4>
        The package is: <input type="checkbox" checked={checked} disabled />
        {checked ? " delivered!" : " not delivered!"}
      </h4>

      {checked && <StarRating stars={5} />}
      <br />
      <button onClick={dispatch}>
        {!checked ? " deliver now!" : " cancel delivery!"}
      </button>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string,
};

export default App;
