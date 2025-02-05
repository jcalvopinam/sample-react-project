import PropTypes from "prop-types";
import Star from "./Star";

const createArray = (length) => [...Array(length)];

function StarRating({ stars = 5, selectedStars, setSelectedStars }) {
  const handleSelectStars = (i) => {
    setSelectedStars(selectedStars === i + 1 ? 0 : i + 1);
  };

  return (
    <>
      <p />
      {createArray(stars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => handleSelectStars(i)}
        />
      ))}
      <br />
      {selectedStars} {selectedStars === 1 ? "star" : "stars"} of {stars}
      <br />
    </>
  );
}

StarRating.propTypes = {
  stars: PropTypes.number,
  selectedStars: PropTypes.number,
  setSelectedStars: PropTypes.func.isRequired,
};

export default StarRating;
