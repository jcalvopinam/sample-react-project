import PropTypes from "prop-types";
import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import StarRating from "./components/StarRating";
import useGitHubUser from "./hooks/useGitHubUser"; // Correct path to your hook

function App({ name }) {
  const [checked, setChecked] = useState(false);
  const { user, loading, error } = useGitHubUser();

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
      <Card defaultName={name} user={user} />
      <h4>
        The packege is: <input type="checkbox" checked={checked} disabled />
        {checked ? " delivered!" : " not delivered!"}
      </h4>

      {checked && <StarRating stars={5} />}
      <br />
      <button onClick={() => setChecked(!checked)}>
        {!checked ? " deliver now!" : " cancel delivery!"}{" "}
      </button>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string,
};

export default App;
