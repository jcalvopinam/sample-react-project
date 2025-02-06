import PropTypes from "prop-types";
import { useReducer, useRef } from "react";
import "./App.css";
import Card from "./components/Card";
import ColorForm from "./components/ColorForm";
import StarRating from "./components/StarRating";
import useGitHubUser from "./hooks/useGitHubUser";

const initialState = {
  checked: false,
  selectedStars: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "DELIVERY":
      return {
        ...state,
        checked: !state.checked,
      };
    case "SELECTED_STARS":
      return {
        ...state,
        selectedStars: action.payload,
      };
    case "RESET_STARS":
      return {
        ...state,
        selectedStars: 0,
        checked: false,
      };
    default:
      return state;
  }
}

function App({ name }) {
  const messageRef = useRef();
  const usernameRef = useRef();

  const [state, dispatch] = useReducer(reducer, initialState);
  const { user, loading, error, fetchUsers } = useGitHubUser();

  const handleDeliveryClick = () => {
    dispatch({ type: "DELIVERY" });
  };

  const dispatchSelectedStars = (stars) => {
    dispatch({ type: "SELECTED_STARS", payload: stars });
  };

  const handleSwapClick = () => {
    dispatch({ type: "RESET_STARS" });
    fetchUsers();
  };

  if (loading) return <p>Loading user...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!user) return <p>No user found</p>;

  return (
    <div>
      <Card
        defaultName={name}
        user={user}
        tagColor={usernameRef}
        fetchUsers={handleSwapClick}
      />
      <h4 ref={messageRef}>
        The package is:{" "}
        <input
          type="checkbox"
          checked={state.checked}
          onChange={handleDeliveryClick}
          disabled
        />
        {state.checked ? " delivered!" : " not delivered!"}
      </h4>

      <ColorForm tagUsernameRef={usernameRef} tagMessageRef={messageRef} />

      {state.checked && (
        <StarRating
          stars={5}
          selectedStars={state.selectedStars}
          setSelectedStars={dispatchSelectedStars}
        />
      )}

      <br />

      <button onClick={handleDeliveryClick}>
        {!state.checked ? " deliver now!" : " cancel delivery!"}
      </button>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string,
};

export default App;
