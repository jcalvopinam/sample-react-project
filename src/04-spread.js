const separator = '----------------------------------------------------------------\n';

const invoice = {
    id: 7,
    name: 'Office shopping',
    date: '2023-06-17',
    client: {
        id: 1,
        firstName: 'Jay',
        lastName: 'C',
        age: 21,
    },
    items: [
        {
            product: 'keyboard',
            price: 399,
            quantity: 1,
        },
        {
            product: 'mouse   ',
            price: 199,
            quantity: 1,
        },
        {
            product: 'monitor ',
            price: 599,
            quantity: 1,
        },
        {
            product: 'papper   ',
            price: 0.99,
            quantity: 10,
        }
    ],
    greeting: () => {
        return `hi, ${invoice.client.firstName} ${invoice.client.lastName}`
    },
    total: () => {
        let total = 0;
        invoice.items.forEach(item => total += item.price * item.quantity);
        return total;
    },
}

console.log(separator + 'same object')
const invoice2 = invoice;
console.log(invoice2 === invoice);
invoice2.id = 0;
console.log(`Invoice 1 'id': ${invoice.id}`);
console.log(`Invoice 2 'id': ${invoice2.id}`);
console.log(invoice2 === invoice);

console.log(separator + 'clone object')
const invoice3 = { ...invoice }
invoice3.id = 1;
console.log(`Invoice 1 'id': ${invoice.id}`);
console.log(`Invoice 3 'id': ${invoice3.id}`);
console.log(invoice3 === invoice);
