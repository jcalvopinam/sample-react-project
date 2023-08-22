import { useEffect, useState } from 'react';
import { getBilling, calculateTotal } from './services/getBilling'
import BillingDetailView from './components/BillingDetailView';
import BillingView from './components/BillingView';
import ClientView from './components/ClientView';
import CompanyView from './components/CompanyView';
import TotalView from './components/TotalView';
import FormItemsView from './components/FormItemsView';

const initialBilling = {
  id: 0,
  name: '',
  client: {
    name: '',
    lastName: '',
    address: {
      country: '',
      city: '',
      street: '',
      number: 0,
    },
  },
  company: {
    name: '',
    fiscalNumber: 0
  },
  items: [
  ]
}


function App() {

  const [count, setCount] = useState(4); //items for dummy data has 3 elements

  const [totalAmount, setTotalAmount] = useState(0)

  const [billing, setBilling] = useState(initialBilling);

  const [items, setItems] = useState([])

  const {
    id: userId,
    name: userName,
    client: clientData,
    company: companyData
  } = billing;

  useEffect(() => {
    const data = getBilling();

    const items = data.items;

    items.forEach((item) => {
      item.unitTotal = item.quantity * item.price;
    });

    console.log(data);
    setBilling(data);
    setItems(data.items);
  }, []);

  useEffect(() => {
    updateUnitTotal()
    setTotalAmount(calculateTotal(items));
  }, [items]);

  const updateUnitTotal = () => {
    items.forEach((item) => {
      item.unitTotal = item.quantity * item.price;
    });
  };

  const handlerAddItems = ({ product, price, quantity }) => {
    setItems([...items, {
      id: count,
      product: product.trim(),
      quantity: +quantity.trim(),
      price: +price.trim(),
    }])

    setCount(count + 1);
  }

  return (
    <>
      <div className="container">
        <div className="card my-3">
          <div className="card-header">Billing App</div>
          <div className="card-body">
            <BillingView id={userId} name={userName} />
            <div className="row my-3">
              <div className="col">
                <ClientView title={"Datos del cliente"} client={clientData} />
              </div>
              <div className="col">
                <CompanyView title={"Datos de la empresa"} company={companyData} />
              </div>
            </div>
            <BillingDetailView title="Detalles de la factura" items={items} />
            <TotalView total={totalAmount} />
            <FormItemsView handler={(newItem) => handlerAddItems(newItem)} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
