import React, { useState } from 'react'

function FormItemsView({handler}) {

  const [formItemState, setFormItemState] = useState({
    product: '',
    quantity: '',
    price: '',
  });

  const { product, quantity, price } = formItemState;


  const onInputChange = ({ target: { name, value } }) => {
    setFormItemState({
      ...formItemState,
      [name]: value
    })
  }


  const onBillingItemSubmit = (event) => {
    event.preventDefault();

    if (product.trim().length <= 1) return;
    if (quantity.trim().length < 1) {
      alert('La cantidad debe ser mayor a 0', event)
      return;
    }
    if (isNaN(quantity.trim())) {
      alert('La cantidad debe ser un numero', event)
      return;
    }
    if (price.trim().length < 1) {
      alert('El precio debe ser mayor a 0', event)
      return;
    }
    if (isNaN(price.trim())) {
      alert('EL precio debe ser un numero', event)
      return;
    }

    handler(formItemState);

    setFormItemState({
      product: '',
      quantity: '',
      price: '',

    })
  }

  return (
    <>
      <form className="w-50" onSubmit={onBillingItemSubmit}>
        <input
          type="text"
          name="product"
          value={product}
          placeholder="Producto"
          className="form-control m-3"
          onChange={onInputChange}
        />
        <input
          type="text"
          name="quantity"
          value={quantity}
          placeholder="Cantidad"
          className="form-control m-3"
          onChange={onInputChange}
        />
        <input
          type="text"
          name="price"
          value={price}
          placeholder="Precio"
          className="form-control m-3"
          onChange={event => onInputChange(event)}
        />
        <button
          type="submit"
          className="btn btn-primary m-3">
          Nuevo Item
        </button>
      </form>
    </>
  )
}

export default FormItemsView