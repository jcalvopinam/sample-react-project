import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "orange" : "gray"} onClick={onSelect} />;
}

Star.propTypes = {
  selected: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
};
export default Star;
