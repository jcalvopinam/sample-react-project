import { PropTypes } from "prop-types";
import { useState } from "react";
import { FaEraser } from "react-icons/fa";

function ColorForm({ tagUsernameRef, tagMessageRef }) {
  const [tag, setTag] = useState("");
  const [color, setColor] = useState("#575757");

  const handleOnChange = (e) => {
    e.preventDefault();
    setColor(e.target.value);

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
    setColor("#575757");
  };

  return (
    <form>
      {"Enter the tag name: "}
      <input
        type="text"
        value={tag}
        placeholder="enter username or message "
        onChange={(e) => setTag(e.target.value)}
      />
      <input
        type="color"
        value={color}
        onChange={(e) => handleOnChange(e)}
        className="color-picker"
      />
      <FaEraser
        style={{ marginLeft: "5px", cursor: "pointer" }}
        onClick={handleResetColor}
      />
    </form>
  );
}

ColorForm.propTypes = {
  tagUsernameRef: PropTypes.object,
  tagMessageRef: PropTypes.object,
};

export default ColorForm;
