import { getBilling } from './services/getBilling'
import BillingDetailView from './components/BillingDetailView';
import BillingView from './components/BillingView';
import ClientView from './components/ClientView';
import CompanyView from './components/CompanyView';
import TotalView from './components/TotalView';

function App() {

  const {
    id: userId,
    name: userName,
    total: totalAmount,
    client: clientData,
    company: companyData,
    items: itemsData
  } = getBilling();

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
            <BillingDetailView title="Detalles de la factura" items={itemsData} />
            <TotalView total={totalAmount}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
