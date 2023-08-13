import PropTypes from 'prop-types'

function ClientView({ title, client }) {

  const {
    name: clientName,
    lastName: clientLastName,
    address: {
      country,
      city,
      street,
      number
    }
  } = client;

  return (
    <>
      <h3>{title}</h3>
      <ul className="list-group">
        <li className="list-group-item active">{clientName} {clientLastName}</li>
        <li className="list-group-item">{country} / {city}</li>
        <li className="list-group-item">{street}</li>
        <li className="list-group-item">{number}</li>
      </ul>
    </>
  )
}

ClientView.propTypes = {
  title: PropTypes.string.isRequired,
  client: PropTypes.object.isRequired,
}

export default ClientView