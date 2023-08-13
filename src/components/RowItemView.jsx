import PropTypes from 'prop-types'

function RowItemView({product, quantity, price}) {
  return (
    <>
      <tr>
        <td>{product}</td>
        <td>{quantity}</td>
        <td>{price}</td>
      </tr>
    </>
  )
}

RowItemView.propTypes = {
  product: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
}

export default RowItemView