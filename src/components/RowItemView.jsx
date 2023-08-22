import PropTypes from 'prop-types'

function RowItemView({ id, product, quantity, price, unitTotal, handlerRemoveItem }) {
  return (
    <>
      <tr>
        <td>{product}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td>{unitTotal}</td>
        <td>
          <button
            className="btn btn-danger btn-xs"
            onClick={() => handlerRemoveItem(id)}>
            Eliminar
          </button>
        </td>
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