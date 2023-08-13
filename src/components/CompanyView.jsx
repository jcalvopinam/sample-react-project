import PropTypes from 'prop-types'

function CompanyView({ title, company }) {

  const { name: companyName, fiscalNumber } = company;

  return (
    <>
      <h3>{title}</h3>
      <ul className="list-group">
        <li className="list-group-item active">{companyName}</li>
        <li className="list-group-item">{fiscalNumber}</li>
      </ul>
    </>
  )
}

CompanyView.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.object.isRequired,
}

export default CompanyView