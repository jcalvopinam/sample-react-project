import PropTypes from 'prop-types'
import RowItemView from './RowItemView';

function BillingDetailView({ title, items, handlerRemoveItem }) {
  return (
    <>
      <h4>{title}</h4>
      <table className="table table-striped table-over">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Unit Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, product, quantity, price, unitTotal }) => {
            return (
              <RowItemView
                key={id}
                id={id}
                product={product}
                quantity={quantity}
                price={price}
                unitTotal={unitTotal}
                handlerRemoveItem={id => handlerRemoveItem(id)}
              />
            )
          })}
        </tbody>
      </table>
    </>
  )
}

BillingDetailView.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
}

export default BillingDetailView