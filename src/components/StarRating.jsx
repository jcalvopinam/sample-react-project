import PropTypes from "prop-types";
import { useState } from "react";
import Star from "./Star";

const createArray = (length) => [...Array(length)];

function StarRating({ stars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>
      {createArray(stars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p />
      {selectedStars} of {stars}
      <br />
    </>
  );
}

StarRating.propTypes = {
  stars: PropTypes.number,
};

export default StarRating;
