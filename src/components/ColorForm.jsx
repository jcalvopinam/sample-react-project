import { PropTypes } from "prop-types";
import { useState } from "react";

function ColorForm({ tagUsernameRef, tagMessageRef }) {
  const [tag, setTag] = useState("");
  const [color, setColor] = useState("#575757");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tag === "message" && tagMessageRef.current) {
      tagMessageRef.current.style.color = color;
    } else if (tag === "username" && tagUsernameRef.current) {
      tagUsernameRef.current.style.color = color;
    } else {
      alert(":: Please enter a valid tag: username or message");
    }
  };

  const handleResetColor = (e) => {
    e.preventDefault();
    tagMessageRef.current.style.color = "#575757";
    tagUsernameRef.current.style.color = "#575757";
  };

  return (
    <form onSubmit={handleSubmit}>
      Tag:
      <input
        type="text"
        value={tag}
        placeholder="enter username or message "
        onChange={(e) => setTag(e.target.value)}
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button type="submit">Change color!</button>
      <button type="submit" onClick={handleResetColor}>
        Reset color
      </button>
    </form>
  );
}

ColorForm.propTypes = {
  tagUsernameRef: PropTypes.object,
  tagMessageRef: PropTypes.object,
};

export default ColorForm;
