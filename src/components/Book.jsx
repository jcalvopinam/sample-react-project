import PropTypes from 'prop-types';

export default function Book({ book }) {
  return (
    <div>{book}</div>
  )
}

Book.propTypes = {
  book: PropTypes.string.isRequired
}