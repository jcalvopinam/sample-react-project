// import { invoices, papper, invoicesByName } from './data/invoices'
import invoices, { papper, invoicesByName } from './data/invoices2'


const invoicesName = invoices.map(invoice => {
    return invoice.name;
})
console.log(invoicesName);

const invoicesClient = invoices.map(invoice => invoice.client.firstName);
console.log(invoicesClient);

const filteringByName = invoicesByName('Anna');
console.log('Filtering by: ', filteringByName);

const invoiceFilter = invoices.filter(invoice => invoice.items.includes(papper));
console.log(invoiceFilter);

const result = invoices.some(invoice => invoice.client.firstName === 'Abbu')
console.log(result);