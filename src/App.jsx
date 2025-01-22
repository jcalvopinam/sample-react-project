import PropTypes from "prop-types";
import { useState } from "react";
import "./App.css";
import StarRating from "./components/StarRating";

function App({ name }) {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <h1> hi, {name}!</h1>
      The packege is:
      <input type="checkbox" checked={checked} disabled />
      {checked ? " delivered!" : " not delivered!"}
      <br />
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
