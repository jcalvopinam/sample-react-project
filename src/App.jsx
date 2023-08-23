import './App.css'

function App() {


  return (
    <>
      <div className="container">
        <h3>Shopping Cart</h3>
        <div className="row">
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Teclado Mecánido RGB</h5>
                <p className="card-text">Descripción</p>
                <p className="card-text">$ 1000</p>
                <button className="btn btn-primary">Agregar</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Samsung Smart TV 55</h5>
                <p className="card-text">Descripción</p>
                <p className="card-text">$ 3000</p>
                <button className="btn btn-primary">Agregar</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Audífono Bluetooth Sony</h5>
                <p className="card-text">Descripción</p>
                <p className="card-text">$ 770</p>
                <button className="btn btn-primary">Agregar</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Memoria Corsair 8GB DDR5</h5>
                <p className="card-text">Descripción</p>
                <p className="card-text">$ 3000</p>
                <button className="btn btn-primary">Agregar</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Asus Nvidia RTX</h5>
                <p className="card-text">Descripción</p>
                <p className="card-text">$ 5000</p>
                <button className="btn btn-primary">Agregar</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">CPU Intel Core i5</h5>
                <p className="card-text">Descripción</p>
                <p className="card-text">$ 4000</p>
                <button className="btn btn-primary">Agregar</button>
              </div>
            </div>
          </div>
        </div>

        <div className="my-4 w-50">
          <h3>Products</h3>
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Unit Total</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>name</td>
                <td>price</td>
                <td>quantity</td>
                <td>unit total</td>
                <td>deete</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" className="text-end fw-bold">Total</td>
                <td colSpan="2" className="text-start fw-bold">12345</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
