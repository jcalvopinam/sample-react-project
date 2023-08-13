import PropTypes from 'prop-types'

function TotalView({total}) {
  return (
    <>
      <div className="text-end">
        <span className="badge bg-success">
          {total}
        </span>
      </div>
    </>
  )
}

TotalView.propTypes = {
  total: PropTypes.number.isRequired,
}

export default TotalView